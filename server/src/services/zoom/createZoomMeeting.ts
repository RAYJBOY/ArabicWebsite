import axios from "axios";
import { getZoomAccessToken } from "./getZoomAccessToken";

export const createZoomMeeting = async (): Promise<{
  join_url: string;
  start_url: string;
}> => {
  const token = await getZoomAccessToken();

  try {
    const response = await axios.post(
      "https://api.zoom.us/v2/users/me/meetings",
      {
        topic: "Course Session",
        type: 2, // Scheduled
        duration: 60, // minutes
        settings: {
          join_before_host: true,
          approval_type: 0,
          registration_type: 1,
          waiting_room: false,
        },
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    return {
      join_url: response.data.join_url,
      start_url: response.data.start_url,
    };
  } catch (error: any) {
    console.error("Error creating Zoom meeting:", error.response?.data || error);
    throw new Error("Failed to create Zoom meeting");
  }
};
