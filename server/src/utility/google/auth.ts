// import { auth } from "googleapis/build/src/apis/abusiveexperiencereport";

// const fs = require('fs').promises;
// const path = require('path');
// const {authenticate} = require('@google-cloud/local-auth');
// const {google} = require('googleapis');

// // If modifying these scopes, delete token.json.
// const SCOPES = ['https://www.googleapis.com/auth/calendar'];
// // The file token.json stores the user's access and refresh tokens, and is
// // created automatically when the authorization flow completes for the first
// // time.
// const TOKEN_PATH = path.join(process.cwd(), 'token.json');
// const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

// /**
//  * Reads previously authorized credentials from the save file.
//  *
//  * @return {Promise<OAuth2Client|null>}
//  */
// async function loadSavedCredentialsIfExist() {
//   try {
//     const content = await fs.readFile(TOKEN_PATH);
//     const credentials = JSON.parse(content);
//     return google.auth.fromJSON(credentials);
//   } catch (err) {
//     console.error('Error loading saved credentials:', err);
//     return null;
//   }
// }

// /**
//  * Serializes credentials to a file compatible with GoogleAuth.fromJSON.
//  *
//  * @param {OAuth2Client} client
//  * @return {Promise<void>}
//  */
// async function saveCredentials(client: any) {
//   const content = await fs.readFile(CREDENTIALS_PATH);
//   const keys = JSON.parse(content);
//   const key = keys.installed || keys.web;
//   const payload = JSON.stringify({
//     type: 'authorized_user',
//     client_id: key.client_id,
//     client_secret: key.client_secret,
//     refresh_token: client.credentials.refresh_token,
//   });
//   await fs.writeFile(TOKEN_PATH, payload);
// }

// /**
//  * Load or request authorization to call APIs.
//  *
//  */
// export async function authorize() {
//   let client = await loadSavedCredentialsIfExist();
//   if (client) {
//     return client;
//   }
//   client = await authenticate({
//     scopes: SCOPES,
//     keyfilePath: CREDENTIALS_PATH,
//   });
//   if (client.credentials) {
//     await saveCredentials(client);
//   }
//   return client;
// }

import fs from 'fs/promises';
import path from 'path';
import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];
export const TOKEN_PATH = path.join(process.cwd(), 'token.json');
export const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');

// Load credentials.json
async function loadClientSecrets() {
  const content = await fs.readFile(CREDENTIALS_PATH, 'utf-8');
  return JSON.parse(content);
}

// Create OAuth2Client
export async function getOAuthClient() {
  const { web } = await loadClientSecrets();
  return new google.auth.OAuth2(
    web.client_id,
    web.client_secret,
    web.redirect_uris[0]
  );
}

// Generate Auth URL
export async function getAuthUrl() {
  const oAuth2Client = await getOAuthClient();
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent', // ensures refresh_token is returned
  });
  return authUrl;
}

// Exchange code for tokens and save them
export async function handleAuthCode(code: string) {
  const oAuth2Client = await getOAuthClient();
  const { tokens } = await oAuth2Client.getToken(code);
  oAuth2Client.setCredentials(tokens);
  await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens));
  return oAuth2Client;
}

// Load stored tokens
export async function getAuthorizedClient() {
  try {
    const token = await fs.readFile(TOKEN_PATH, 'utf-8');
    const oAuth2Client = await getOAuthClient();
    oAuth2Client.setCredentials(JSON.parse(token));
    return oAuth2Client;
  } catch (err) {
    console.log('No saved token. Run /auth/init');
    return null;
  }
}
