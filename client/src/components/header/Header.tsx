import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Login } from "@mui/icons-material";
import { SideBar } from "../sidebar/SideBar";
import { useState } from "react";

interface HeaderProps {
  displayTitle: boolean
}

export const Header = ({displayTitle}: HeaderProps) => {

  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <Box>
        <AppBar position="static">
            <Toolbar>
                <IconButton onClick={() => setOpenSideBar(!openSideBar)}>
                    <MenuIcon />
                </IconButton>
                {displayTitle && <Typography variant="h6" component="div" sx={{flexGrow: 1, textAlign: "center"}}>
                        Dr.Alkawthar's Classroom
                </Typography>}
                <Box sx={{display: 'flex', flexDirection: "row", marginLeft: 'auto'}}>
                  <Button color="inherit">Courses</Button>
                  <Button color="inherit" startIcon={<Login />} sx={{marginLeft: '15%'}}>Login</Button>
                </Box>
            </Toolbar>
        </AppBar>
      </Box>
      <SideBar openSideBar={openSideBar} setOpenSideBar={setOpenSideBar}/>
    </>

  );
};
