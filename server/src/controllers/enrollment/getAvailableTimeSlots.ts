import { Request, Response } from "express";
import { getAvailableTimeSlotsFromGoogleCalendar } from "../../services/enrollment/getAvailableTimeSlotsFromGoogleCalendar";

export const getAvailableTimeSlots = async (req: Request, res: Response) => {
  try {
    const availableTimeSlots = await getAvailableTimeSlotsFromGoogleCalendar(req.query.dayOfTheWeek as string, req.query.userId as string);
    res.status(200).json(availableTimeSlots);
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong getting available time slots - ${error}`,
      category: "Enrollment",
    });
  }
};
