import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const jwt = require("jsonwebtoken");

export const logoutUser = async (
  req: Request,
  res: Response,
  prisma: PrismaClient
) => {
  try {
    const userId: string = req.body.id;

    const refreshToken = req.cookies.refresh_token;

    if (refreshToken) {
      prisma.user.update({
        where: { id: userId },
        data: { refreshToken: null },
      });
    }

    // Clear both access and refresh tokens from cookies
    res.clearCookie("access_token", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    res.clearCookie("refresh_token", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    res.sendStatus(200);
  } catch (error) {
    console.error("Error during user sign out:", error);
    throw error;
  }
};
