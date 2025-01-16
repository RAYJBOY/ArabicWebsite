import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  Box,
} from "@mui/material";
import axios from "axios";

type LoginModalProps = {
  open: boolean;
  handleClose: () => void;
};

export const LoginDialog: React.FC<LoginModalProps> = ({
  open,
  handleClose,
}) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [username, setUsername] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  const handleSignUp = async () => {
    console.log("Username: ", username);
    console.log("Email: ", email);
    console.log("Password: ", password);
    axios("http://localhost:5001/users/sign-up", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ username, email, password }),
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
      <DialogContent>
        <TextField
          required
          label="Username"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(input: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(input.target.value)
          }
        />
        {isSignUp && (
          <TextField
            required
            type="email"
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            onChange={(input: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(input.target.value)
            }
          />
        )}
        <TextField
          required
          type="password"
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          onChange={(input: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(input.target.value)
          }
        />
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSignUp}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </Button>
          {!isSignUp && (
            <Button
              color="secondary"
              fullWidth
              onClick={() => console.log("Reset Password Clicked")}
            >
              Reset Password
            </Button>
          )}
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button onClick={switchMode} fullWidth>
            {isSignUp
              ? "Already have an account? Sign In"
              : "Don't have an account? Sign Up"}
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
