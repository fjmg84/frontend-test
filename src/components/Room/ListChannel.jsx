import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

import AddChannel from "./Modal/AddChannel";
import { logout } from "../../redux/actions/auth";
import { activeChannel, removeChannel } from "../../redux/actions/channel";
import { removeMessageThisChannel } from "../../redux/actions/messages";

const drawerWidth = 240;

function ListChannel(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { channelReducer } = useSelector((state) => state);
  const { name: nameChannelActive } = channelReducer?.active[0] || {
    name: undefined,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleDeleteChannel = (id) => {
    dispatch(removeChannel(id));
    dispatch(removeMessageThisChannel(id));
  };

  const handleChannelActive = (id) => {
    dispatch(activeChannel(id));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("../", { replace: true });
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <Button variant="link" startIcon={<AddIcon />} onClick={handleOpenModal}>
        Add Channel
      </Button>
      {nameChannelActive !== undefined && (
        <Chip
          label={`active channel:${nameChannelActive}`}
          variant="outlined"
        />
      )}
      <Divider />
      <List>
        {channelReducer.channel.map((item) => (
          <ListItem
            button
            key={item.id}
            onClick={() => handleChannelActive(item.id)}
          >
            <ListItemText primary={item.name} />
            <IconButton
              aria-label="delete"
              onClick={() => handleDeleteChannel(item.id)}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Exit"].map((text) => (
          <ListItem button key={text} onClick={handleLogout}>
            <InboxIcon />
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <AddChannel open={open} close={handleCloseModal} />;
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Room Details
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}

ListChannel.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ListChannel;
