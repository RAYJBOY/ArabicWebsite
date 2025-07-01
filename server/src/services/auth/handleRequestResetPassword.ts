import { PrismaClient } from "@prisma/client";
import crypto from "crypto";
import { Request, Response } from "express";
import { transporter } from "../../utility/mail/mailer";

export const handleRequestResetPassword = async (
  req: Request,
  res: Response,
  prisma: PrismaClient
) => {
  const { email } = req.body;
  console.log("Request to reset password for email:", req.body);
  const user = await prisma.user.findUnique({ where: { email: email } });

  if (!user) return res.sendStatus(204); // avoid user enumeration

  const token = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  const expires = new Date(Date.now() + 1000 * 60 * 60); // 1 hour

  await prisma.passwordResetToken.upsert({
    where: { userId: user.id },
    update: { token: hashedToken, expiresAt: expires },
    create: { userId: user.id, token: hashedToken, expiresAt: expires },
  });

  // send email here using your mail service
  const resetLink = `http://localhost:3000/resetPassword?token=${token}`;
  try {
    console.log("Sending password reset email to:", email);
    await transporter.sendMail({
      from: `Arabic Website`,
      to: email,
      subject: "Password Reset Request",
      html: `
      <p>You requested a password reset.</p>
      <p>Click the link below to reset your password:</p>
      <a href="${resetLink}">${resetLink}</a>
      <p>This link will expire in 1 hour.</p>
    `,
    });

    res.status(200).json({ success: "Message sent successfully!" });
    return;
  } catch (error) {
    console.error("Error sending contact message:", error);
    res.status(500).json({ error: "Failed to send message." });
    return;
  }
};
