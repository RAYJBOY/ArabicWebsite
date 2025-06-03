import { Request, Response } from "express";
import { logoutUser } from "../../services/user/logoutUser";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userSignOut = async (req: Request, res: Response) => {
  try {
    await logoutUser(req, res, prisma);
  } catch (error) {
    console.error("Error during user sign out:", error);
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
