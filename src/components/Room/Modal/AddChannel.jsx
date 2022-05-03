import * as React from "react";
import { useForm } from "react-hook-form";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, TextField, Grid } from "@mui/material";

import { useDispatch } from "react-redux";
import { addChannel } from "../../../redux/actions/channels/add";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function AddChannel({ open, close }) {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const handleAddChannel = ({ channel }) => {
    dispatch(addChannel(channel));
    setValue("channel", "");
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={close}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Channel from your room
          </Typography>

          <form
            id="addChannel"
            name="addChannel"
            autoComplete="off"
            onSubmit={handleSubmit(handleAddChannel)}
          >
            <Grid item xs={12}>
              <TextField
                error={errors.channel && true}
                label={errors.channel ? errors.channel.message : "Name channel"}
                variant="outlined"
                {...register("channel")}
              />
            </Grid>
            <Button type="{submit}">Add Channel</Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AddChannel;
