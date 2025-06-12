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

export const ChooseDay = () => {
  const [chosenSessions, setChosenSessions] = useState<ChosenTime[]>([
    {} as ChosenTime,
  ]);

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
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
        }}
      >
        <List sx={{ width: "70%" }}>
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
      </Box>
    </>
  );
};
