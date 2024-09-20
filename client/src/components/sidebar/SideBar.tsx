import { Box, Collapse, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SearchIcon from '@mui/icons-material/Search';
import SchoolIcon from '@mui/icons-material/School';
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface SideBarProps {
  openSideBar: boolean
  setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>
}

export const SideBar = ({openSideBar, setOpenSideBar}: SideBarProps) => {

  const [expand, setExpand] = useState(false);

  const expandCategory = () => {
    setExpand(!expand);
  }

  const sideBarList = (
    <Box>
      <List>
        <ListItem>
          <ListItemButton onClick={expandCategory}>
            <ListItemIcon>
              <SearchIcon/>
            </ListItemIcon>
            <ListItemText primary="Explore" />
            {expand ? <ExpandLess/> : <ExpandMore/>}
          </ListItemButton>
        </ListItem>

        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List component="div">
            <ListItem>
              <ListItemButton sx={{paddingLeft: 5}}>
                <ListItemIcon>
                  <RecordVoiceOverIcon/>
                </ListItemIcon>
                <ListItemText primary="Arabic" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton sx={{paddingLeft: 5}}>
                <ListItemIcon>
                  <SchoolIcon/>
                </ListItemIcon>
                <ListItemText primary="Islamic Studies" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton sx={{paddingLeft: 5}}>
                <ListItemIcon>
                  <MenuBookIcon/>
                </ListItemIcon>
                <ListItemText primary="Quran" />
              </ListItemButton>
            </ListItem>
          </List>
        </Collapse>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <SubscriptionsIcon/>
            </ListItemIcon>
            <ListItemText primary="My Enrollments" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <ContactPageIcon/>
            </ListItemIcon>
            <ListItemText primary="Contact Us" />
          </ListItemButton>
        </ListItem>

        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon/>
            </ListItemIcon>
            <ListItemText primary="Log Out" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return <div>
    <Drawer open={openSideBar} onClose={() => setOpenSideBar(false)}>
      {sideBarList}
    </Drawer>
  </div>;
};
