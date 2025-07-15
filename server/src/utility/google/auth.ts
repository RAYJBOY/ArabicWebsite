import { PrismaClient } from "@prisma/client";
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/calendar"];

const prisma = new PrismaClient();

// Create OAuth2Client
export function getOAuthClient() {
  return new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID!,
    process.env.GOOGLE_CLIENT_SECRET!,
    process.env.GOOGLE_REDIRECT_URI!
  );
}

// Generate Auth URL
export async function getAuthUrl() {
  const oAuth2Client = await getOAuthClient();
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
    prompt: "consent", // ensures refresh_token is returned
  });
  return authUrl;
}

// Load stored tokens
export async function getAuthorizedClient(userId: string) {
  const tokenRecord = await prisma.googleAuthToken.findUnique({
    where: { userId },
  });

  if (!tokenRecord) {
    console.error("No Google tokens found for user:", userId);
    return null;
  }

  const oAuth2Client = getOAuthClient();

  oAuth2Client.setCredentials({
    access_token: tokenRecord.accessToken,
    refresh_token: tokenRecord.refreshToken,
    expiry_date: Number(tokenRecord.expiryDate),
    token_type: tokenRecord.tokenType || undefined,
    scope: tokenRecord.scope || undefined,
  });

  // If access token is expired, refresh it
  if (Date.now() >= Number(tokenRecord.expiryDate)) {
    try {
      const refreshed = await oAuth2Client.refreshAccessToken();
      const newTokens = refreshed.credentials;

      await prisma.googleAuthToken.update({
        where: { userId },
        data: {
          accessToken: newTokens.access_token!,
          expiryDate: BigInt(newTokens.expiry_date!),
        },
      });

      oAuth2Client.setCredentials(newTokens);
    } catch (err) {
      console.error("Failed to refresh Google token", err);
      return null;
    }
  }

  return oAuth2Client;
}
