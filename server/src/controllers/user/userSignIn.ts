import { Request, Response } from "express";
import { loginUser } from "../../services/user/loginUser";
import { LoginUserRequest } from "../../types/user";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userSignIn = async (req: Request, res: Response) => {
  try {
    const user: LoginUserRequest = req.body;
    await loginUser(req, res, user, prisma);
  } catch (error) {
    console.error("Error during user sign in:", error);
    if (error instanceof Error) {
      res.status(500).json({ message: error.message, category: 'AUTHORISATION' });
    } else {
      res.status(500).json({ message: "An unexpected error occurred", category: 'AUTHORISATION' });
    }
  }
};
