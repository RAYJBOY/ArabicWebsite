import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Login } from "@mui/icons-material";

export const Header = () => {
  return (
    <Box>
        <AppBar position="static">
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{flexGrow: 1, textAlign: "center"}}>
                        Dr.Alkawthar's Classroom
                </Typography>
                <Button color="inherit">Courses</Button>
                <Button color="inherit" startIcon={<Login />} sx={{marginLeft: '2%'}}>Login</Button>
            </Toolbar>
        </AppBar>
    </Box>
  );
};
