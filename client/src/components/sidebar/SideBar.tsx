import { Box, Collapse, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import { useState } from "react";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

export const SideBar = () => {

  const [expand, setExpand] = useState(false);

  const expandCategory = () => {
    setExpand(!expand);
  }

  const sideBarList = (
    <Box sx={{width: '20%', bgcolor: 'background.paper'}}>
      <List>
        <ListItem>
          <ListItemButton onClick={expandCategory}>
            <ListItemIcon>
              <MenuBookIcon/>
            </ListItemIcon>
            <ListItemText primary="Courses" />
            {expand ? <ExpandMore/> : <ExpandLess/>}
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
                  <MenuBookIcon/>
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
    {sideBarList}
  </div>;
};
