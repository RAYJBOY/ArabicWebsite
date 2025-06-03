import { Button, Grid2, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import instance from "../../axios-config";

export const ContactUsForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    console.log("Submitting contact form with:", { fullname, email, message });
    if (!fullname || !email || !message) {
      setError(true);
      return;
    }

    try {
      const response = await instance.post("/contact/submit", {
        name: fullname,
        email,
        message,
      });

      if (response.status !== 200) {
        console.error("Failed to send message:", response);
        throw new Error("Failed to send message.");
      }

      const data = await response.data;
      setFullname("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending contact message:", error);
    }
  };

  return (
    <form noValidate>
      <Stack spacing={5}>
        <Grid2 container spacing={2}>
          <Grid2 size={6}>
            <TextField
              error={error && !fullname}
              helperText={error && !fullname ? "Full name is required." : ""}
              variant="outlined"
              label="Full Name"
              fullWidth
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFullname(event.target.value)
              }
            />
          </Grid2>
          <Grid2 size={6}>
            <TextField
              error={error && !email}
              helperText={error && !email ? "Email is required." : ""}
              variant="outlined"
              label="Email"
              fullWidth
              required
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
          </Grid2>
          <Grid2 size={12}>
            <TextField
              error={error && !message}
              helperText={error && !message ? "Message is required." : ""}
              variant="outlined"
              label="Message"
              fullWidth
              required
              multiline
              minRows={10}
              maxRows={10}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setMessage(event.target.value)
              }
            />
          </Grid2>
        </Grid2>
        <Grid2>
          <Button
            variant="contained"
            onClick={handleSubmit}
            sx={{ float: "right" }}
          >
            Submit
          </Button>
        </Grid2>
      </Stack>
    </form>
  );
};
