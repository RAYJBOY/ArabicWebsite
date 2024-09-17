import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { Login } from "@mui/icons-material";

interface HeaderProps {
  displayTitle: boolean
}

export const Header = ({displayTitle}: HeaderProps) => {
  return (
    <Box>
        <AppBar position="static">
            <Toolbar>
                <IconButton>
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
  );
};
