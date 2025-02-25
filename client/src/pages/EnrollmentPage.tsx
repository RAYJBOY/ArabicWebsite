import { useState } from "react";
import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import "./EnrollmentPage.css";
import { CourseSelect } from "../components/enrollment/CourseSelect";
import { CourseDatePicker } from "../components/enrollment/CourseDatePicker";
import dayjs, { Dayjs } from "dayjs";
import instance from "../axios-config";
import { store } from "../store";

export const EnrollmentPage = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [date, setDate] = useState<Dayjs | null>(dayjs());
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiryDate, setExpiryDate] = useState<string>("");
  const [securityCode, setSecurityCode] = useState<string>("");

  const handleSubmit = async () => {
    console.log("Hello!");
    console.log("selected course: ", selectedCourse);
    console.log("date: ", date?.toString());
    console.log("first name: ", firstName);
    console.log("last name: ", lastName);
    console.log("card number: ", cardNumber);
    console.log("expiry date: ", expiryDate);
    console.log("security: ", securityCode);
    try {
      const userId = store.getState().users.id;
      const response = await instance("/enroll/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ userId: userId, course: selectedCourse, enrollmentDate: date })
      })
      console.log("Response", response);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <>
      <div style={{ margin: "2%" }}>
        <Typography variant="h2" align="center">
          Enrollment
        </Typography>
      </div>
      <div>
        <form noValidate>
          <Stack spacing={5}>
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
                <CourseDatePicker date={date} setDate={setDate} />
              </Grid2>
            </Grid2>

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
                <Typography>Payment Details</Typography>
              </Grid2>
              <Grid2 size={4}>
                <TextField
                  variant="outlined"
                  label="Card details"
                  fullWidth
                  required
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setCardNumber(event.target.value)
                  }
                />
              </Grid2>
              <Grid2 size={2}>
                <TextField
                  variant="outlined"
                  label="Expiry date"
                  required
                  fullWidth
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setExpiryDate(event.target.value)
                  }
                />
              </Grid2>
              <Grid2 size={2}>
                <TextField
                  variant="outlined"
                  label="Security code"
                  required
                  fullWidth
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    setSecurityCode(event.target.value)
                  }
                />
              </Grid2>
            </Grid2>

            <Grid2>
              <Button variant="contained" onClick={handleSubmit}>
                Submit
              </Button>
            </Grid2>
          </Stack>
        </form>
      </div>
    </>
  );
};
