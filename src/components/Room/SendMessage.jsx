import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Send from "@mui/icons-material/Send";

import { addMessage } from "../../redux/actions/messages";

const SendMessage = () => {
  const [sendMessage, setSendMessage] = useState();
  const { channelReducer, authReducer } = useSelector((state) => state);
  const { id: idChannelActive } = channelReducer.active[0] || { id: undefined };
  const { username } = authReducer || { username: undefined };
  const dispatch = useDispatch();

  const handleCreateMessage = (event) => {
    setSendMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (idChannelActive)
      dispatch(addMessage(username, sendMessage, idChannelActive));
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        backgroundColor: "white",
        padding: 1,
        borderRadius: 20,
      }}
    >
      <TextField
        id="sendMessage"
        variant="standard"
        sx={{ width: "90%" }}
        onChange={handleCreateMessage}
      />
      <IconButton
        color="primary"
        aria-label="send message"
        onClick={handleSendMessage}
      >
        <Send />
      </IconButton>
    </Grid>
  );
};

export default SendMessage;
