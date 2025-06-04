import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { getCurrentUser } from "../../services/user/getCurrentUser";

const prisma = new PrismaClient();

export const currentUser = async (req: Request, res: Response) => {
  try {
    await getCurrentUser(req, res, prisma);
  } catch (error) {
    console.error("Error getting current user:", error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message, category: 'AUTHORISATION' });
    } else {
      res.status(500).json({ message: "An unexpected error occurred", category: 'AUTHORISATION' });
    }
  }
};
