import {
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
import { useState } from "react";

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
  const [time, setTime] = useState<Dayjs | null>(null);

  const [timeError, setTimeError] = useState<string>("");
  const [dayError, setDayError] = useState<string>("");

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
      { day: dayOfTheWeek, time: time ? time.format("HH:mm") : "" },
      ...chosenSessions,
    ]);
    setDayOfTheWeek("");
    setTime(null);
  };

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
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
            value={chosenSession.day ?? dayOfTheWeek ?? ""}
          >
            {daysOfWeek.map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{dayError}</FormHelperText>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label="Select a time"
            sx={{ width: "100%" }}
            onChange={(time) => setTime(time)}
            value={
              chosenSession.time ? dayjs(chosenSession.time, "HH:mm") : null
            }
            onError={(error) => setTimeError(error ? "Invalid time" : "")}
            slotProps={{
              textField: {
                error: !!timeError,
                helperText: timeError,
              },
            }}
          />
        </LocalizationProvider>
        <Button sx={{ width: "20%" }} onClick={handleAddClass}>
          Add class
        </Button>
      </Stack>
    </Stack>
  );
};
