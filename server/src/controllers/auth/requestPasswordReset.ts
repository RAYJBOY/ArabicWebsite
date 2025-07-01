import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { handleRequestResetPassword } from "../../services/auth/handleRequestResetPassword";

const prisma = new PrismaClient();

export const requestPasswordReset = async (req: Request, res: Response) => {
  try {
    console.log("Request to reset password for email:", req.body);
    await handleRequestResetPassword(req, res, prisma);
    if (res.headersSent) {
      return; // If headers are already sent, exit early to avoid further processing
    }
    res.status(200).json({ message: "Password successfully requested to be reset" });
  } catch (error) {
    console.error("Error in requestPasswordReset:", error);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
