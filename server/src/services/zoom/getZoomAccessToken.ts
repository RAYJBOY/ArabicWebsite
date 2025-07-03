import axios from "axios";
import qs from "qs";

export const getZoomAccessToken = async (): Promise<string> => {
  const tokenUrl = "https://zoom.us/oauth/token";
  const credentials = `${process.env.ZOOM_CLIENT_ID}:${process.env.ZOOM_CLIENT_SECRET}`;
  const base64Credentials = Buffer.from(credentials).toString("base64");

  const data = qs.stringify({
    grant_type: "account_credentials",
    account_id: process.env.ZOOM_ACCOUNT_ID,
  });

  try {
    const response = await axios.post(tokenUrl, data, {
      headers: {
        Authorization: `Basic ${base64Credentials}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching Zoom access token:", error);
    throw new Error("Failed to fetch Zoom access token");
  }
};
