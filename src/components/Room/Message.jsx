import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const card = (who, username, message, dateMessage) => {
  return (
    <>
      <div className={`${who} message-card`}>
        <div className="message-card-title">
          <Typography gutterBottom sx={{ fontSize: 12 }}>
            {username}
          </Typography>
        </div>
        <div className="message-card-body">
          <Typography variant="body2">{message}</Typography>
        </div>
        <Divider />
        <div className="message-card-date">
          <Typography color="text.secondary" sx={{ fontSize: 12 }}>
            {dateMessage}
          </Typography>
        </div>
      </div>
    </>
  );
};

function Message({ who, username, message, dateMessage }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Card variant="outlined">
        {card(who, username, message, dateMessage)}
      </Card>
    </Box>
  );
}

export default Message;
