import dayjs from "dayjs";
import { google } from "googleapis";
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

export const getGoogleToken = async (req: Request, res: Response, prisma: PrismaClient) => {
  try {
    const userId = req.body.userId;

    const googleAuthToken = await prisma.googleAuthToken.findFirst({
      where: { userId },
    });

    if (!googleAuthToken) {
      res.status(200).json({ needsAuth: true });
      return;
    }

    const { accessToken, refreshToken, expiryDate } = googleAuthToken;

    // Check if the access token is expired
    const isExpired = dayjs().isAfter(dayjs(Number(expiryDate)));

    if (isExpired) {
      // Create OAuth client
      const oAuth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        process.env.GOOGLE_REDIRECT_URI
      );

      oAuth2Client.setCredentials({
        refresh_token: refreshToken,
      });

      // Refresh access token
      const { credentials } = await oAuth2Client.refreshAccessToken(); // deprecated, use below

      if(!credentials.access_token || !credentials.expiry_date) {
        res.status(500).json({ message: "Failed to refresh access token." });
        return;
      }

      await prisma.googleAuthToken.update({
        where: { id: googleAuthToken.id },
        data: {
          accessToken: credentials.access_token,
          expiryDate: credentials.expiry_date,
        },
      });

      res.status(200).json({
        message: "Token refreshed",
        accessToken: credentials.access_token,
      });
      return;
    }

    // Token is valid
    return res.status(200).json({ accessToken });
  } catch (error) {
    console.error("Error retrieving or refreshing Google token:", error);
    res.status(500).json({ message: "Internal server error", error });
    return;
  }
};
