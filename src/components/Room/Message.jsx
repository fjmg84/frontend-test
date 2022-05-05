import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { removeMessage, editMessage } from "../../redux/actions/messages";

function Message({ who, id, username, message, dateMessage }) {
  const dispatch = useDispatch();

  const handleRemoveMessage = (message) => {
    dispatch(removeMessage(message));
  };

  const handleEditMessage = (message) => {
    dispatch(editMessage(message));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Card variant="outlined">
        <div className={`${who} message-card`}>
          <div className="message-card-title">
            <Typography gutterBottom sx={{ fontSize: 12 }}>
              {username}
            </Typography>
          </div>
          <div className="message-card-body">
            <Typography variant="body2">{message}</Typography>
          </div>
          {who === "me" && (
            <CardActions>
              <Button
                size="small"
                sx={{ color: "#000", fontSize: "10px" }}
                onClick={() => handleEditMessage(id)}
              >
                edit
              </Button>
              <Button
                size="small"
                sx={{ color: "#000", fontSize: "10px" }}
                onClick={() => handleRemoveMessage(id)}
              >
                remove
              </Button>
            </CardActions>
          )}
          <Divider />
          <div className="message-card-date">
            <Typography color="text.secondary" sx={{ fontSize: 12 }}>
              {dateMessage}
            </Typography>
          </div>
        </div>
      </Card>
    </Box>
  );
}

export default Message;
