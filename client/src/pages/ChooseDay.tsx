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
  const [chosenSessions, setChosenSessions] = useState<ChosenTime[]>([]);
  return (
    <>
      <Typography variant="h3" align="center">
        Choose preferred day for classes
      </Typography>
      <Stack spacing={2} width={"10%"}>
        {Array.from({ length: chosenSessions.length }).map((_, index) => (
          <Chip
            label={
              chosenSessions[index].day + "s at " + chosenSessions[index].time
            }
            key={index}
          />
        ))}
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
          <ListItem>
            <DayAndTimeSelector
              chosenSessions={chosenSessions}
              setChosenSessions={setChosenSessions}
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
};
