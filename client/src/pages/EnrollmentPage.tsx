import { useState, useEffect } from "react";
import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import "./EnrollmentPage.css";
import { CourseSelect } from "../components/enrollment/CourseSelect";
import instance from "../axios-config";
import { CourseDaySelector } from "../components/enrollment/CourseDaySelector";
import { StripePaymentPage } from "./StripePaymentPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { getCurrentUser } from "../utilities/user";
import { LoginDialog } from "../components/login/LoginDialog";
import { User } from "../types/user";

const stripePromise = loadStripe(
  "pk_test_51QwVGGF9QzhEDzRPU479FxXKx5pozBPgAY6rnFToYxwfxi9H8eHQl7pCWR1c4q1fJgZBuxyxnrIUCJqW1jecxc1F00RxchXA0x"
);

export const EnrollmentPage = () => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [numberOfCourseDays, setNumberOfCourseDays] = useState<number>();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [clientSecret, setClientSecret] = useState();
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

  const handleSubmit = async () => {
    try {
      const response = await instance("/enroll/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({
          userId: currentUser?.id,
          course: selectedCourse,
          classesInAMonth: numberOfCourseDays,
        }),
      });
      window.location.href = response.data.url;
    } catch (error: any) {
      setShowUnauthScreen(true);
      console.error(error);
    }
  };

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
      <div style={{ margin: "2%" }}>
        <Typography variant="h2" align="center">
          Enrollment
        </Typography>
      </div>
      {showPaymentPage && clientSecret && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: "50%" }}>
            <Elements
              stripe={stripePromise}
              options={{ clientSecret: clientSecret }}
            >
              <StripePaymentPage />
            </Elements>
          </div>
        </div>
      )}
      {!showPaymentPage && (
        <div>
          <form noValidate>
            <Stack spacing={5}>
              <Grid2 container spacing={2}>
                <Grid2 size={12}>
                  <Typography>Personal Details</Typography>
                </Grid2>
                <Grid2 size={4}>
                  <TextField
                    variant="outlined"
                    label="First Name"
                    fullWidth
                    required
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setFirstName(event.target.value)
                    }
                  />
                </Grid2>
                <Grid2 size={4}>
                  <TextField
                    variant="outlined"
                    label="Last Name"
                    fullWidth
                    required
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setLastName(event.target.value)
                    }
                  />
                </Grid2>
              </Grid2>

              <Grid2 container spacing={2}>
                <Grid2 size={12}>
                  <Typography>Course Details</Typography>
                </Grid2>
                <Grid2 size={4}>
                  <CourseSelect
                    selectedCourse={selectedCourse}
                    setSelectedCourse={setSelectedCourse}
                  />
                </Grid2>
                <Grid2 size={4}>
                  <CourseDaySelector
                    numberOfCourseDays={numberOfCourseDays}
                    setNumberOfCourseDays={setNumberOfCourseDays}
                  />
                </Grid2>
              </Grid2>
              <Grid2>
                <Button variant="contained" onClick={handleSubmit}>
                  Next
                </Button>
              </Grid2>
            </Stack>
          </form>
        </div>
      )}
    </>
  );
};
