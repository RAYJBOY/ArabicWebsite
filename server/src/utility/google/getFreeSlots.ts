import { FreeSlot } from "./../../types/enrollment";

export const getFreeSlots = (
  busySlots: any[],
  workStart: string,
  workEnd: string
): FreeSlot[] => {
  const workStartDate = new Date(workStart);
  const workEndDate = new Date(workEnd);

  const freeSlots: FreeSlot[] = [];
  let lastEnd = workStartDate;

  busySlots.forEach((slot) => {
    const busyStart = new Date(slot.start);
    const busyEnd = new Date(slot.end);

    if (busyStart > lastEnd) {
      freeSlots.push({
        start: lastEnd.toISOString(),
        end: busyStart.toISOString(),
      });
    }

    if (busyEnd > lastEnd) {
      lastEnd = busyEnd;
    }
  });

  if (lastEnd < workEndDate) {
    freeSlots.push({
      start: lastEnd.toISOString(),
      end: workEndDate.toISOString(),
    });
  }
  // Now break each free slot into 1-hour intervals
  return freeSlots.flatMap((slot) => splitIntoHourlySlots(slot));
};

// Helper function to split a free slot into 1-hour blocks
const splitIntoHourlySlots = (slot: FreeSlot): FreeSlot[] => {
  const result: FreeSlot[] = [];
  let current = new Date(slot.start);
  const end = new Date(slot.end);

  while (current < end) {
    const next = new Date(current);
    next.setHours(current.getHours() + 1);

    if (next > end) break;

    result.push({
      start: current.toISOString(),
      end: next.toISOString(),
    });

    current = next;
  }

  return result;
};
