import { useDispatch } from "react-redux";
import { Box, Grid, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { login } from "../redux/actions/auth/login";

const LoginForm = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    const { username } = data;
    dispatch(login(username));
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item xs={8} alignItems="center">
        <Box
          sx={{
            padding: 10,
            margin: 2,
            borderRadius: 5,
            boxShadow: 3,
            backgroundColor: "white",
            textAlign: "center",
          }}
        >
          <form
            id="login"
            name="login"
            autoComplete="off"
            onSubmit={handleSubmit(handleLogin)}
          >
            <Grid item xs={12}>
              <TextField
                error={errors.username && true}
                label={errors.username ? errors.username.message : "Usuario"}
                variant="outlined"
                {...register("username", {
                  required: {
                    value: true,
                    message: "Nombre de usuario requerido",
                  },
                })}
              />
            </Grid>
            <Grid
              item
              sx={{
                padding: 2,
              }}
            >
              <Button variant="outlined" type="{submit}" color="primary">
                Login
              </Button>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
