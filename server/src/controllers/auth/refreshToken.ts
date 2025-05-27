import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { handleRefreshToken } from "../../services/auth/handleRefreshToken";

const prisma = new PrismaClient();

export const refreshToken = async (req: Request, res: Response) => {
  try {
    await handleRefreshToken(req, res, prisma);
    res.status(200).json({message: 'Access token refreshed'});
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong getting user's courses - ${error}`,
      category: "Enrollment",
    });
  }
};
