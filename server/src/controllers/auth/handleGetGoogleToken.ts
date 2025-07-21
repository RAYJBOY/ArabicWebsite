import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getGoogleToken } from "../../services/auth/getGoogleToken";

const prisma = new PrismaClient();

export const handleGetGoogleToken = async (req: Request, res: Response) => {
  try {
    await getGoogleToken(req, res, prisma);
    if (res.headersSent) {
        return; // If headers are already sent, exit early to avoid further processing
    }
  } catch (error) {
    console.error("Error retrieving or refreshing Google token:", error);
    res.status(500).json({ message: "Internal server error", error });
    return;
  }
};
