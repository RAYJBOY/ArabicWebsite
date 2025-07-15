import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import instance from "../../axios-config";
import { ChosenTime } from "../../pages/ChooseSessions";

type AvailableTimeSlot = {
  start: string;
  end: string;
};

interface DayAndTimeSelectorProps {
  setChosenSession: React.Dispatch<
    React.SetStateAction<ChosenTime | undefined>
  >;
  userId: string;
  courseCategory: string;
  courseName: string;
}

export const DayAndTimeSelector = ({
  setChosenSession,
  userId,
  courseCategory,
  courseName,
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
            userId: userId,
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

  const handleSubmitEnrollments = async () => {
    // This function will handle the submission of chosen sessions
    const chosenSession = {
      day: dayOfTheWeek,
      time: time,
    };
    try {
      const response = await instance("/enroll/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({
          userId: userId,
          enrollmentTime: chosenSession,
          courseCategory: courseCategory,
          courseName: courseName,
        }),
      });
      window.location.href = response.data.url;
    } catch (error: any) {
      console.error("Error submitting enrollments:", error);
      // Handle error appropriately, e.g., show a notification to the user
    }
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
    <Stack sx={{ width: "100%" }}>
      <Stack direction={"row"} spacing={2} sx={{ width: "100%" }}>
        <FormControl sx={{ width: "100%" }} error={!!dayError}>
          <InputLabel id="day-select-label">Select Day</InputLabel>
          <Select
            label="Select Day"
            labelId="day-select-label"
            onChange={(e) => setDayOfTheWeek(e.target.value)}
            value={dayOfTheWeek}
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
            value={time}
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
      </Stack>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          width: "100%",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Button
          variant="contained"
          onClick={handleSubmitEnrollments}
          sx={{ marginTop: 2 }}
          disabled={time==='' || dayOfTheWeek === ''}
        >
          Pay Now
        </Button>
      </Box>
    </Stack>
  );
};
