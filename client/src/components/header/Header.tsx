import {
  Alert,
  AppBar,
  Box,
  Button,
  IconButton,
  Snackbar,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Login } from "@mui/icons-material";
import { SideBar } from "../sidebar/SideBar";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LoginDialog } from "../login/LoginDialog";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { signIn } from "../../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../utilities/user";
import instance from "../../axios-config";
import { UserMenu } from "./UserMenu";

interface HeaderProps {
  displayTitle: boolean;
}

export const Header = ({ displayTitle }: HeaderProps) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);
  const [openErrorSnackbar, setOpenErrorSnackbar] = useState(false);
  const user = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDeleteAccount = async () => {
    try {
      const response = await instance("/users/delete-account", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        data: { userId: user.id },
      });
      console.log("Account deletion response:", response);
      dispatch(signIn({ id: undefined, name: undefined, isAdmin: undefined }));
      navigate("/");
    } catch (error: any) {
      // Try to extract error message from response
      const message =
        error?.response?.data?.error ||
        error?.message ||
        "Error deleting account.";
      setDeleteError(message);
      setOpenErrorSnackbar(true);
      console.error("Error deleting account:", error);
    }
  };

  const handleUserLogout = async () => {
    try {
      await logoutUser();
      dispatch(signIn({ id: undefined, name: undefined, isAdmin: undefined }));
      navigate("/");
    } catch (error) {
      console.error("Error during user logout:", error);
    }
  };

  const handleVerification = async () => {
    window.open(`${process.env.REACT_APP_BACKEND_URL}/auth/init`, "_blank");
  };

  const handleCloseSnackbar = () => {
    setOpenErrorSnackbar(false);
    setDeleteError(null);
  };

  return (
    <>
      <Snackbar
        open={openErrorSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="error"
          sx={{ width: "100%" }}
        >
          {deleteError}
        </Alert>
      </Snackbar>
      <LoginDialog
        open={openLoginDialog}
        handleClose={() => setOpenLoginDialog(false)}
      />
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="end" onClick={() => setOpenSideBar(!openSideBar)}>
              <MenuIcon />
            </IconButton>
            {displayTitle && (
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, marginLeft: "2%" }}
              >
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Dr.Alkawthar's Classroom
                </Link>
              </Typography>
            )}
            <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
              { user.id && !user.isAdmin && (
                <Button
                  sx={{ width: "100%", whiteSpace: "nowrap" }}
                  color="inherit"
                  onClick={() => navigate("/myCourses")}
                >
                  My Courses
                </Button>
              )}
              {user.isAdmin && (
                <Button
                  sx={{ width: "100%" }}
                  color="inherit"
                  onClick={() => handleVerification()}
                >
                  Verify
                </Button>
              )}
              {user.isAdmin && (
                <Button
                  sx={{ width: "100%" }}
                  color="inherit"
                  onClick={() => navigate("/myStudents")}
                >
                  My Students
                </Button>
              )}
              {!user.id && (
                <Button
                  color="inherit"
                  startIcon={<Login />}
                  sx={{ marginLeft: "15%" }}
                  onClick={() => setOpenLoginDialog(true)}
                >
                  Login
                </Button>
              )}
              <UserMenu
                user={user}
                onLogout={handleUserLogout}
                onDeleteAccount={handleDeleteAccount}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <SideBar
        openSideBar={openSideBar}
        setOpenSideBar={setOpenSideBar}
        handleUserLogout={handleUserLogout}
        signedInUser={user}
      />
    </>
  );
};
