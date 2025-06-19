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
import { useEffect, useState } from "react";
import instance from "../axios-config";
import { getCurrentUser } from "../utilities/user";
import { User } from "../types/user";
import { LoginDialog } from "../components/login/LoginDialog";
import { useLocation } from "react-router-dom";

export interface ChosenTime {
  day: string;
  time: string;
}

export const ChooseSessions = () => {
  const location = useLocation();
  const { courseCategory, courseName } = location.state || {};
  const [chosenSessions, setChosenSessions] = useState<ChosenTime[]>([]);
  const [currentUser, setCurrentUser] = useState<User>();
  const [showUnauthScreen, setShowUnauthScreen] = useState(false);

  useEffect(() => {
      const getSignedInUser = async () => {
        try {
          const user = await getCurrentUser();
          setCurrentUser(user);
        } catch (error: any) {
          console.error("Error trying to get sign in user: ", error);
          if (error.response.data.category === "AUTHORISATION") {
            setShowUnauthScreen(true);
          }
        }
      };
      getSignedInUser();
    }, []);

  const handleSubmitEnrollments = async () => {
    // This function will handle the submission of chosen sessions
    try {
      const nonEmtpySessions = chosenSessions.filter(
        (session) => session.day && session.time
      );
      const response = await instance("/enroll/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: JSON.stringify({
            userId: currentUser?.id,
            enrollmentTimes: nonEmtpySessions,
            courseCategory: courseCategory,
            courseName: courseName,
          }),
        });
        window.location.href = response.data.url;
    } catch (error: any) {
      console.error("Error submitting enrollments:", error);
      // Handle error appropriately, e.g., show a notification to the user
    }
  }

  if (showUnauthScreen) {
    return (
      <LoginDialog
        open={showUnauthScreen}
        handleClose={() => setShowUnauthScreen(false)}
      />
    );
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
          {Array.from({length: chosenSessions.length + 1}).map((_, index) => {
            return (
              <ListItem>
                <DayAndTimeSelector
                  chosenSession={chosenSessions[index]}
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
