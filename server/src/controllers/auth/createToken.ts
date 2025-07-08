import { Request, Response, Router } from "express";
import { google } from "googleapis";
import fs from "fs/promises";
import { CREDENTIALS_PATH, TOKEN_PATH } from "../../utility/google/auth";

export const createToken = async (req: Request, res: Response) => {
  const code = req.query.code as string;
  const content = await fs.readFile(CREDENTIALS_PATH, 'utf8');
  const credentials = JSON.parse(content);
  const { client_secret, client_id, redirect_uris } = credentials.web;

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);

  await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens));

  res.send("Authorization successful! You can now close this tab.");
};
