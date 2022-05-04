import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Grid } from "@mui/material";
import Alert from "@mui/material/Alert";
import Message from "./Message";
import { loadMessage } from "../../redux/actions/messages";

const ListMessages = () => {
  const [messageError, setMessageError] = useState({
    state: false,
    message: undefined,
  });
  const { messageReducer, channelReducer } = useSelector((state) => state);
  const channelActive = channelReducer.active[0]?.id || undefined;
  const dispatch = useDispatch();

  /**
   * Descomentar para simular respuestas de API
   */
  /* useEffect(() => {
    setTimeout(() => {
      if (channelActive !== undefined) {
        loadMessage(channelActive)
          .then((message) => {
            dispatch(message);
          })
          .catch((error) => {
            setMessageError({
              state: true,
              message: error,
            });
          });
      }
    }, 10000);
  }); */

  return (
    <>
      <Box
        sx={{
          padding: 1,
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
            padding: 1,
            height: "100%",
            overflow: "auto",
          }}
        >
          {messageError.state && (
            <Alert severity="error">
              This is an error alert — {`${messageError.message}`}!
            </Alert>
          )}

          {messageReducer.map((message) => {
            return (
              message.channel === channelActive && (
                <Grid item xs={12} key={message.id}>
                  <Message {...message} />
                </Grid>
              )
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

export default ListMessages;
