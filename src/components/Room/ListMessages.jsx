import { Box, Grid } from "@mui/material";
import Message from "./Message";

const ListMessages = () => {
  return (
    <>
      <Box
        sx={{
          boxShadow: 10,
          width: "100%",
          height: 400,
          marginBottom: 2,
          backgroundColor: "white",
        }}
      >
        <Grid
          container
          sx={{
            padding: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          <Message who={"me"} />
        </Grid>
      </Box>
    </>
  );
};

export default ListMessages;
