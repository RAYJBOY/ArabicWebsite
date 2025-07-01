import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Alert,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import instance from "../../axios-config";

export const ResetPasswordDialog: React.FC<{
  open: boolean;
  handleClose: () => void;
}> = ({ open, handleClose }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<null | string>(null);
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleResetPassword = async () => {
    try {
      const response = await instance("/auth/requestPasswordReset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: JSON.stringify({ email }),
      });
      console.log(response);
      if (response.status === 200) {
        setSuccessMessage("Password reset link sent to your email.");
        setEmail("");
      }
    } catch (error: any) {
      setError(error.response.data.message);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Reset Password</DialogTitle>
      <DialogContent>
        <Typography>
          Enter your email address to receive a password reset link.
        </Typography>
        <TextField
          required
          autoFocus
          margin="normal"
          label="Email Address"
          type="email"
          fullWidth
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <Alert severity="error">{error}</Alert>}
        {successMessage && <Alert severity="success">{successMessage}</Alert>}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleResetPassword}>Reset Password</Button>
      </DialogActions>
    </Dialog>
  );
};
