import { Request, Response } from "express";
import { transporter } from "../../utility/mail/mailer";

export const handleContactUs = async (req: Request, res: Response) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Us Message",
      html: `<p>${message}</p>`,
    });

    res.status(200).json({ success: "Message sent successfully!" });
    return;
  } catch (error) {
    console.error("Error sending contact message:", error);
    res.status(500).json({ error: "Failed to send message." });
    return;
  }
};
