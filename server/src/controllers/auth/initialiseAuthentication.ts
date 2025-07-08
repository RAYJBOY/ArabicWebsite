import { Request, Response, Router } from "express";
import { google } from "googleapis";
import path from "path";
import fs from "fs/promises";
import { CREDENTIALS_PATH } from "../../utility/google/auth";

const router = Router();

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

export const initialiseAuthentication = async (_: Request, res: Response) => {
  const content = await fs.readFile(CREDENTIALS_PATH, 'utf8');
  const credentials = JSON.parse(content);
  const { client_secret, client_id, redirect_uris } = credentials.web;

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent", // forces refresh_token to be issued
  });

  res.redirect(authUrl);
}

export default router;
