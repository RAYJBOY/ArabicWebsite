import {
  Box,
  Button,
  Chip,
  Grid2,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { DayAndTimeSelector } from "../components/enrollment/DayAndTimeSelector";
import { useState } from "react";

export interface ChosenTime {
  day: string;
  time: string;
}

export const ChooseSessions = () => {
  const [chosenSessions, setChosenSessions] = useState<ChosenTime[]>([
    {} as ChosenTime,
  ]);

  const handleSubmitEnrollments = async () => {
    // This function will handle the submission of chosen sessions
    console.log("Chosen sessions:", chosenSessions);
    const nonEmtpySessions = chosenSessions.filter(
      (session) => session.day && session.time
    );
    console.log("Non empty sessions:", nonEmtpySessions);

  }

  return (
    <>
      <Typography variant="h3" align="center">
        Choose preferred day for classes
      </Typography>
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent="center"
        sx={{ marginTop: 2 }}
      >
        {chosenSessions.map((chosenSession, index) => {
          if (Object.keys(chosenSession).length === 0) {
            return null; // Skip empty sessions
          }
          return (
            <Chip
              label={chosenSession.day + "s at " + chosenSession.time}
              key={index}
            />
          );
        })}
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
          width: "70%",
          mx: "auto",
        }}
      >
        <List sx={{ width: "100%" }}>
          {chosenSessions.map((chosenSession, index) => {
            return (
              <ListItem>
                <DayAndTimeSelector
                  chosenSession={chosenSession}
                  setChosenSessions={setChosenSessions}
                  chosenSessions={chosenSessions}
                />
              </ListItem>
            );
          })}
        </List>
        <Button variant="contained" onClick={handleSubmitEnrollments} sx={{ margin: 2, alignSelf: "flex-end" }} disabled={chosenSessions.length < 2}>
          Submit
        </Button>
      </Box>
    </>
  );
};
