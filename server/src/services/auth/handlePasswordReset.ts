import { Request, Response } from "express";
import crypto from "crypto";
import { PrismaClient } from "@prisma/client";
import { genSalt, hash } from "bcrypt";


export const handleResetPassword = async (
  req: Request,
  res: Response,
  prisma: PrismaClient
) => {
  const { token, newPassword } = req.body;
  
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

  const tokenRecord = await prisma.passwordResetToken.findFirst({
    where: { token: hashedToken, expiresAt: { gt: new Date() } },
    include: { user: true },
  });

  if (!tokenRecord)
    return res.status(400).json({ message: "Invalid or expired token" });

  const salt = await genSalt();
  const hashedPassword = await hash(newPassword, salt);

  await prisma.user.update({
    where: { id: tokenRecord.userId },
    data: { password: hashedPassword },
  });

  await prisma.passwordResetToken.delete({
    where: { userId: tokenRecord.userId },
  });

  res.status(200).json({ message: "Password reset successfully" });
};
