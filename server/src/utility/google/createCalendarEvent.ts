const { google } = require("googleapis");

export const createCalendarEvent = async (
  auth: any,
  startTime: string,
  endTime: string,
  summary: string,
  userEmail: string,
  zoomMeetingUrl: string
): Promise<string> => {
  const calendar = google.calendar({ version: "v3", auth });
  const event = {
    summary: summary,
    description: `Join Zoom Meeting: ${zoomMeetingUrl}`,
    start: {
      dateTime: startTime,
      timeZone: "Europe/London",
    },
    end: {
      dateTime: endTime,
      timeZone: "Europe/London",
    },
    recurrence: ['RRULE:FREQ=WEEKLY'],
    attendees: [{ email: userEmail }],
  };
  try {
    const response = await calendar.events.insert({
      calendarId: "primary",
      requestBody: event,
    });
    console.log("Event created: ", response.data.htmlLink);
    return response.data.id; // Return the event ID
  } catch (error) {
    console.error("Error creating calendar event: ", error);
    throw new Error("Failed to create calendar event");
  }
};
