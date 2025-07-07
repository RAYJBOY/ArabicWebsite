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
  const [chosenSession, setChosenSession] = useState<ChosenTime>();
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


  if (showUnauthScreen || !currentUser) {
    return (
      <LoginDialog
        open={showUnauthScreen}
        handleClose={() => setShowUnauthScreen(false)}
      />
    );
  }

  return (
    <>
      <Typography variant="h3" align="center" sx={{ margin: '2%' }}>
        Book Class
      </Typography>
      <Typography variant="h5" align="center" sx={{ marginTop: '5%', marginBottom: '2%' }}>
        Select a day and time for your {courseCategory} - {courseName} classes
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 2,
          width: "70%",
          mx: "auto",
        }}
      >
        <DayAndTimeSelector setChosenSession={setChosenSession} userId={currentUser?.id} courseCategory={courseCategory} courseName={courseName}/>
      </Box>
    </>
  );
};
