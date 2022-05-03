import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const cardMe = (
  <div className="message-card">
    <div className="message-card-title">
      <Typography gutterBottom sx={{ fontSize: 12 }}>
        Name of User
      </Typography>
    </div>
    <div className="message-card-body">
      <Typography variant="body2">
        Body Message Body MessageBody MessageBody MessageBody Message Body
        Message Body MessageBody MessageBody MessageBody Message
      </Typography>
    </div>
    <Divider />
    <div className="message-card-date">
      <Typography color="text.secondary" sx={{ fontSize: 12 }}>
        data of message
      </Typography>
    </div>
  </div>
);

const cardHe = (
  <div className="message-card">
    <div className="message-card-title">
      <Typography gutterBottom sx={{ fontSize: 12 }}>
        Name of User
      </Typography>
    </div>
    <div className="message-card-body">
      <Typography variant="body2">
        Body Message Body MessageBody MessageBody MessageBody Message Body
        Message Body MessageBody MessageBody MessageBody Message
      </Typography>
    </div>
    <Divider />
    <div className="message-card-date">
      <Typography color="text.secondary" sx={{ fontSize: 12 }}>
        data of message
      </Typography>
    </div>
  </div>
);

function Message({ who }) {
  console.log(who);
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{who === "me" ? cardMe : cardHe}</Card>
    </Box>
  );
}

export default Message;
