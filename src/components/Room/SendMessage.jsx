import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Send from "@mui/icons-material/Send";

const SendMessage = () => {
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
      <TextField id="sendMessage" variant="standard" sx={{ width: "90%" }} />
      <IconButton color="primary" aria-label="send message" component="span">
        <Send />
      </IconButton>
    </Grid>
  );
};

export default SendMessage;
