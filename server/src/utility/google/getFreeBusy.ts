const { google } = require("googleapis");

export const getFreeBusy = async (auth: any, workStart: string, workEnd: string) => {
  const calendar = google.calendar({ version: "v3", auth });
    const res = await calendar.freebusy.query({
    requestBody: {
      timeMin: workStart,
      timeMax: workEnd,
      timeZone: "BST",
      items: [{ id: "primary" }],
    },
  });
  return res.data.calendars.primary.busy;
};


