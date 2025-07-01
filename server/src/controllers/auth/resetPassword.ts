import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { Request, Response } from "express";
import { transporter } from "../../utility/mail/mailer";
import { handleRequestResetPassword } from "../../services/auth/handleRequestResetPassword";
import { handleResetPassword } from "../../services/auth/handlePasswordReset";

const prisma = new PrismaClient();

export const resetPassword = async (req: Request, res: Response) => {
  try {
    console.log("Request to reset password, in resetPassword...");
    await handleResetPassword(req, res, prisma);
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
