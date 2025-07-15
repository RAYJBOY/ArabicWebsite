import React, { useState, MouseEvent } from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteIcon from "@mui/icons-material/Delete";
import { UserState } from "../../features/users/userSlice";
import { ConfirmDeleteDialog } from "../login/ConfirmDeleteDialog"; // <-- Import your dialog here

type UserMenuProps = {
  user: UserState;
  onLogout: () => void;
  onDeleteAccount: () => void;
};

export const UserMenu: React.FC<UserMenuProps> = ({
  user,
  onLogout,
  onDeleteAccount,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    onLogout();
    handleMenuClose();
  };

  const handleDeleteClick = () => {
    setOpenConfirmDelete(true);
    handleMenuClose();
  };

  // Called when user confirms deletion in the dialog
  const handleConfirmDelete = () => {
    onDeleteAccount();
    setOpenConfirmDelete(false);
  };

  const handleCancelDelete = () => {
    setOpenConfirmDelete(false);
  };

  if (!user?.id) return null;

  return (
    <>
      <IconButton color="inherit" onClick={handleMenuOpen} size="small">
        <AccountCircleIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          <Typography variant="inherit">Logout</Typography>
        </MenuItem>

        {!user.isAdmin && (
          <MenuItem onClick={handleDeleteClick}>
            <ListItemIcon>
              <DeleteIcon fontSize="small" />
            </ListItemIcon>
            <Typography variant="inherit">Delete Account</Typography>
          </MenuItem>
        )}
      </Menu>

      {/* Confirmation dialog */}
      <ConfirmDeleteDialog
        open={openConfirmDelete}
        onClose={handleCancelDelete}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};
