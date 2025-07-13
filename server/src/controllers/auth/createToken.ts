import { Request, Response, Router } from "express";
import { google } from "googleapis";

export const createToken = async (req: Request, res: Response) => {
  const code = req.query.code as string;

  const oAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
  );

  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);

  // Save token in a secure location (like a DB or Render environment variable)
  // For now, just log it (or optionally save to a file if you trust your environment)
  console.log("Tokens received:", tokens);

  res.send("Authorization successful! You can now close this tab.");
};
