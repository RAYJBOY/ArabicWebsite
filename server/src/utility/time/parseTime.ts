import { getDateOfDay } from "../../services/enrollment/getAvailableTimeSlotsFromGoogleCalendar";

export const parseTime = (
  timeString: string
): { startTime: string; endTime: string } => {
  const [startTime, endTime] = timeString.split(" - ");
  return {
    startTime: startTime,
    endTime: endTime,
  };
};

export const parseSlotToTimeslot = (day: string, time: string) => {
  const date = getDateOfDay(day); // Date object for next 'WEDNESDAY'
  const [startStr, endStr] = time.split(' - '); // "15:00", "16:00"

  const [startHour, startMinute] = startStr.split(':').map(Number);
  const [endHour, endMinute] = endStr.split(':').map(Number);

  // Start time
  const start = new Date(date);
  start.setHours(startHour, startMinute, 0, 0);

  // End time
  const end = new Date(date);
  end.setHours(endHour, endMinute, 0, 0);

  return {
    startTime: start.toISOString(),
    endTime: end.toISOString(),
  };
}
