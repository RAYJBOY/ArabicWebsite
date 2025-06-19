import { FreeSlot } from "../../types/enrollment";
import { authorize } from "../../utility/google/auth";
import { getFreeBusy } from "../../utility/google/getFreeBusy";
import { getFreeSlots } from "../../utility/google/getFreeSlots";

export const getAvailableTimeSlotsFromGoogleCalendar = async (dayOfTheWeek: string): Promise<
  FreeSlot[]
> => {
  const targetDate = getDateOfDay(dayOfTheWeek);

  const workStart = new Date(targetDate);
  workStart.setHours(9, 0, 0, 0); // 9:00 AM
  const workEnd = new Date(targetDate);
  workEnd.setHours(17, 0, 0, 0); // 5:00 PM

  const authorisedClient = await authorize();
  const busyTimeSlots = await getFreeBusy(authorisedClient, workStart.toISOString(), workEnd.toISOString());
  const freeSlots = getFreeSlots(
    busyTimeSlots,
    workStart.toISOString(),
    workEnd.toISOString()
  );
  return freeSlots;
};

const getDateOfDay = (dayOfTheWeek: string) => {
  const today = new Date();
  const daysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  const targetDayIndex = daysOfWeek.indexOf(dayOfTheWeek.toLowerCase());
  
  if (targetDayIndex === -1) {
    throw new Error("Invalid day of the week provided.");
  }

  const currentDayIndex = today.getDay();
  const daysUntilTarget = (targetDayIndex - currentDayIndex + 7) % 7;
  
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + daysUntilTarget);
  
  return targetDate;
}
