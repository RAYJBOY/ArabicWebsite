import {
  Box,
  Button,
  Chip,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import instance from "../../axios-config";
import { format } from "path";

type AvailableTimeSlot = {
  start: string;
  end: string;
};

interface DayAndTimeSelectorProps {
  chosenSession: { day: string; time: string };
  chosenSessions: { day: string; time: string }[];
  setChosenSessions: React.Dispatch<
    React.SetStateAction<{ day: string; time: string }[]>
  >;
}

export const DayAndTimeSelector = ({
  chosenSession,
  chosenSessions,
  setChosenSessions,
}: DayAndTimeSelectorProps) => {
  const [dayOfTheWeek, setDayOfTheWeek] = useState<string>("");
  const [time, setTime] = useState<string>("");

  const [timeError, setTimeError] = useState<string>("");
  const [dayError, setDayError] = useState<string>("");

  const [availableTimeSlots, setAvailableTimeSlots] = useState<
    AvailableTimeSlot[]
  >([]);

  useEffect(() => {
    const getAvailableTimeSlots = async () => {
      try {
        const response = await instance.get("/enroll/getAvailableTimeSlots", {
          params: {
            dayOfTheWeek: dayOfTheWeek,
          },
        });
        setAvailableTimeSlots(formatTimeSlots(response.data));
        console.log("Available time slots: ", response.data);
      } catch (error) {
        console.error("Error fetching available time slots: ", error);
      }
    };
    if (dayOfTheWeek) {
      console.log("Fetching available time slots for day:", dayOfTheWeek);
      getAvailableTimeSlots();
    }
  }, [dayOfTheWeek]);

  const formatTimeSlots = (slots: AvailableTimeSlot[]) => {
    return slots.map((slot) => ({
      start: dayjs(slot.start).format("HH:mm"),
      end: dayjs(slot.end).format("HH:mm"),
    }));
  };

  const handleAddClass = () => {
    if (!dayOfTheWeek) {
      console.error("Please select a day.");
      setDayError("Please select a day.");
      return;
    }
    if (!time) {
      console.error("Please select a time.");
      setTimeError("Please select a time.");
      return;
    }
    setDayError("");
    setTimeError("");
    setChosenSessions([
      { day: dayOfTheWeek, time: time ?? "" },
      ...chosenSessions,
    ]);
    setDayOfTheWeek("");
    setTime("");
  };

  const handleDeleteClass = () => {
    const updatedSessions = chosenSessions.filter(
      (session) =>
        session.day !== chosenSession.day || session.time !== chosenSession.time
    );
    setChosenSessions(updatedSessions);
    setDayOfTheWeek("");
    setTime("");
    setChosenSessions(updatedSessions);
  };

  const daysOfWeek = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
  ];

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Stack direction={"row"} spacing={2} sx={{ width: "100%" }}>
        <FormControl sx={{ width: "100%" }} error={!!dayError}>
          <InputLabel id="day-select-label">Select Day</InputLabel>
          <Select
            label="Select Day"
            labelId="day-select-label"
            onChange={(e) => setDayOfTheWeek(e.target.value)}
            value={
              dayOfTheWeek
                ? dayOfTheWeek
                : chosenSession?.day
                ? chosenSession?.day
                : ""
            }
          >
            {daysOfWeek.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{dayError}</FormHelperText>
        </FormControl>

        <FormControl sx={{ width: "100%" }} error={!!timeError}>
          <InputLabel id="time-select-label">Select Time</InputLabel>
          <Select
            label="Select Time"
            labelId="time-select-label"
            onChange={(e) => setTime(e.target.value)}
            value={time ? time : chosenSession?.time ? chosenSession?.time : ""}
          >
            {availableTimeSlots.map((timeSlot, index) => (
              <MenuItem
                key={index}
                value={`${timeSlot.start} - ${timeSlot.end}`}
              >
                {`${timeSlot.start} - ${timeSlot.end}`}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{timeError}</FormHelperText>
        </FormControl>
        {chosenSession?.day && chosenSession?.time && (
          <Button
            sx={{ width: "20%", textAlign: "center" }}
            onClick={handleDeleteClass}
          >
            <DeleteOutlineIcon sx={{ fontSize: 35 }} />
          </Button>
        )}
        {!chosenSession?.day && !chosenSession?.time && (
          <Button sx={{ width: "20%" }} onClick={handleAddClass}>
            Add class
          </Button>
        )}
      </Stack>
    </Stack>
  );
};
