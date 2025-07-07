import {
  AppBar,
  Box,
  Button,
  IconButton,
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
import { signIn, UserState } from "../../features/users/userSlice";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../utilities/user";

interface HeaderProps {
  displayTitle: boolean;
}

export const Header = ({ displayTitle }: HeaderProps) => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openLoginDialog, setOpenLoginDialog] = useState(false);
  const user = useAppSelector((state) => state.users);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleUserLogout = async () => {
    try {
      await logoutUser();
      dispatch(
        signIn({ id: undefined, name: undefined, isAdmin: undefined })
      );
      navigate("/");
    } catch (error) {
      console.error("Error during user logout:", error);
    }
  };

  return (
    <>
      <LoginDialog
        open={openLoginDialog}
        handleClose={() => setOpenLoginDialog(false)}
      />
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge='end' onClick={() => setOpenSideBar(!openSideBar)}>
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
            <Box
              sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}
            >
              {!user.isAdmin && <Button sx={{ width: '100%', whiteSpace: 'nowrap' }} color="inherit" onClick={() => navigate('/myCourses')}>My Courses</Button>}
              {user.isAdmin && <Button sx={{ width: '100%' }} color="inherit" onClick={() => navigate('/myStudents')}>My Students</Button>}
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
              {user.id && (
                <Button
                  color="inherit"
                  startIcon={<Login />}
                  sx={{ marginLeft: "15%" }}
                  onClick={handleUserLogout}
                >
                  Logout
                </Button>
              )}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar} handleUserLogout={handleUserLogout} signedInUser={user}/>
    </>
  );
};
