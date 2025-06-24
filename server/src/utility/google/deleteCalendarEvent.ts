import { google } from "googleapis";

export const deleteCalendarEvent = async (
  auth: any,
  eventId: string
): Promise<void> => {
  const calendar = google.calendar({ version: "v3", auth });
  try {
    await calendar.events.delete({
      calendarId: "primary",
      eventId: eventId,
    });
    console.log("Event deleted successfully");
  } catch (error) {
    console.error("Error deleting calendar event: ", error);
    throw new Error("Failed to delete calendar event");
  }
};
