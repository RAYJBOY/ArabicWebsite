import { ChosenEnrollmentTimes } from "../../types/enrollment";

export const addOneHour = (timeObject: ChosenEnrollmentTimes): string => {
  const [hours, minutes] = timeObject.time.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, 0, 0);
  date.setHours(date.getHours() + 1);

  const newHours = String(date.getHours()).padStart(2, "0");
  const newMinutes = String(date.getMinutes()).padStart(2, "0");

  return `${newHours}:${newMinutes}`;
};
