import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import { userDeletion } from "../../services/user/userDeletion";

const prisma = new PrismaClient();

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await userDeletion(req, res, prisma);
  } catch (error) {
    console.error("Error deleting user account:", error);
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: error.message, category: "AUTHORISATION" });
    } else {
      res
        .status(500)
        .json({
          message: "An unexpected error occurred",
          category: "AUTHORISATION",
        });
    }
  }
};
