import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  TextField,
  Box,
} from "@mui/material";
import axios from "axios";
import { setUserAccessToken, UserState } from "../../features/users/userSlice";
import { useAppDispatch } from "../../hooks";

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
  const [error, setError] = useState<null | string>(null);
  const [errorCategory, setErrorCategory] = useState<string>();
  const [signedInUser, setSignedInUser] = useState<UserState | undefined>();

  const dispatch = useAppDispatch();

  const switchMode = () => {
    setIsSignUp((prevIsSignUp) => !prevIsSignUp);
  };

  useEffect(() => {
    if(signedInUser) {
      dispatch(setUserAccessToken(signedInUser))
    }
  }, [dispatch, signedInUser])

  const handleSignUp = async () => {
    try {
      const response = await axios("http://localhost:5001/users/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ username, email, password }),
      });
      console.log(response);
      handleClose();
    } catch (error: any) {
      setError(error.response.data.message);
      setErrorCategory(error.response.data.category);
    }
  };

  const handleSignIn = async () => {
    try {
      const response = await axios("http://localhost:5001/users/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ username, password }),
      });
      console.log(response);
      if (response.status === 200) {
        setSignedInUser({
          id: response.data.id,
          name: response.data.username,
          token: response.data.accessToken,
        });
      }
      handleClose();
    } catch (error: any) {
      setError(error.response.data.message);
      setErrorCategory(error.response.data.category);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{isSignUp ? "Sign Up" : "Sign In"}</DialogTitle>
      <DialogContent>
        <TextField
          error={errorCategory === "USERNAME"}
          helperText={errorCategory === "USERNAME" && error}
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
            error={errorCategory === "EMAIL"}
            helperText={errorCategory === "EMAIL" && error}
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
            onClick={isSignUp ? handleSignUp : handleSignIn}
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
