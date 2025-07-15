import { Request, Response, Router } from "express";
import { google } from "googleapis";
import { getOAuthClient } from "../../utility/google/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createToken = async (req: Request, res: Response) => {
  const code = req.query.code as string;

  const oAuth2Client = getOAuthClient();

  try {
    const { tokens } = await oAuth2Client.getToken(code);
    oAuth2Client.setCredentials(tokens);
    console.log("Tokens received:", tokens);
    const accessToken = tokens.access_token!;
    const refreshToken = tokens.refresh_token!;
    const expiryDate = tokens.expiry_date!;
    const scope = tokens.scope;
    const tokenType = tokens.token_type;
    const teacherUserId = process.env.TEACHER_USER_ID!; // Replace with your auth mechanism
    // Upsert: update if exists, otherwise create
    await prisma.googleAuthToken.upsert({
      where: { userId: teacherUserId },
      update: {
        accessToken,
        refreshToken,
        expiryDate: BigInt(expiryDate),
        scope,
        tokenType,
      },
      create: {
        userId: teacherUserId,
        accessToken,
        refreshToken,
        expiryDate: BigInt(expiryDate),
        scope,
        tokenType,
      },
    });
    res.send("Authorization successful! You can now close this tab.");
  } catch (error) {
    console.error("Error exchanging code for tokens:", error);
    res.status(500).send("Error during Google authentication");
  }
};
