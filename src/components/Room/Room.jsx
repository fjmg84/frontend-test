import { Box, Toolbar } from "@mui/material";
import ListMessages from "./ListMessages";
import ListUser from "./ListUser";
import SendMessage from "./SendMessage";

const drawerWidth = 240;

const Room = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <ListUser />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <ListMessages />
        <SendMessage />
      </Box>
    </Box>
  );
};

export default Room;
