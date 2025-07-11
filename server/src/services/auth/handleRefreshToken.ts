import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export const handleRefreshToken = async (
  req: Request,
  res: Response,
  prisma: PrismaClient
) => {
  try {
    const refreshToken = req.cookies.refresh_token;

    if (!refreshToken) {
      console.error("Refresh token missing");
      res.status(401).json({ error: "Refresh token missing" });
      return;
    }

    // 1. Verify token
    let payload: any;
    try {
      payload = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.error("Invalid or expired refresh token", err);
      res.status(403).json({ error: "Invalid or expired refresh token" });
      return;
    }

    // 2. Get user from DB
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
    });

    if (!user || user.refreshToken !== refreshToken) {
      console.error("Refresh token does not match");
      res.status(403).json({ error: "Refresh token does not match" });
      return;
    }

    // 3. Generate new access token
    const newAccessToken = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.ACCESS_TOKEN_SECRET!,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRES_IN || "15m" }
    );

    res.cookie("access_token", newAccessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000, // 15 mins
    });

    res.status(200).json({ message: "Access token refreshed" });
  } catch (error) {
    console.error("Error refreshing token: ", error);
    res.status(500).json({ error: "Internal server error from backend" });
  }
};
