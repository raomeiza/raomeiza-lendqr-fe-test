import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  Button,
  Modal,
  CircularProgress,
} from "@mui/material";
import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import intro from "../resource/intro.svg";
import logo from "../resource/logo.svg";
import { useAuth } from "./contexts/authContext";
import { Display } from "../utils/device";

// create a regex for email
const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
// create a regex for password. it must contain at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function Welcome() {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({ email: "", password: "" });
  const [inputType, setInputType] = React.useState("password");
  const [showLoading, setShowLoading ] = React.useState(false)
  
  const from = useLocation().state?.from || "/users";
  const [errors, setErrors] = React.useState({ email: "", password: "" });
  // @ts-ignore
  const { signin, user } = useAuth();
  const handleChange = (element: string, value: string) => {
    setValues({ ...values, [element]: value });
  };

  const LoadingModal = () => {
    return (
      <Modal
        open={showLoading}
        onClose={() => setShowLoading(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <CircularProgress
          sx={{
            width: 100,
            height: 100,
            color: "primary.main",
          }}
        />
      </Modal>
    );
  };
  const { isDesktop } = Display();
  const handleSubmit = () => {
    if (values.email && values.password) {
      let validEmail = emailRegex.test(values.email);
      let validPassword = passwordRegex.test(values.password);
      if (validEmail && validPassword) {
        signin({ email: values.email, password: values.password });
        setShowLoading(true)
        setTimeout(() => {
          if (user) {
            navigate(from);
          }
          setShowLoading(false)
          }, 1000);
      } else {
        setErrors({
          email: validEmail ? "" : "Invalid email",
          password: validPassword ? "" : "Invalid password",
        });
      }
    } else {
      setErrors({
        email: values.email ? "" : "Email is required",
        password: values.password ? "" : "Password is required",
      });
    }
  };
  return (
    <Grid container spacing={0} sx={{ height: "100vh", position: "relative" }}>
      <LoadingModal />
      <img
        src={logo}
        alt="logo"
        sizes="150%"
        style={{
          position: "absolute",
          top: 40,
          left: 40,
        }}
      />
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          textAlign: "center",
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          ...(!isDesktop && { display: "none" }),
        }}
      >
        <img src={intro} alt="intro" />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          ...(!isDesktop && { padding: 2 }),
        }}
      >
        <Box
          component="form"
          fontWeight={600}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Typography variant="h2" sx={{ mt: 2, mb: 2, textAlign: "left", fontWeight: 600 }}>
            Welcome!
          </Typography>
          <Typography
            variant="h5"
            sx={{ mb: 5, textAlign: "left", opacity: 0.6}}
          >
            <Box component="span">Enter details to continue</Box>
          </Typography>
          <TextField
            id="email-input"
            label="Email"
            variant="outlined"
            helperText={errors.email}
            error={errors.email !== ""}
            sx={{ width: "100%", mb: 2 }}
            onChange={(e) => handleChange("email", e.currentTarget.value)}
          />
          <TextField
            id="password input"
            label="Password"
            variant="outlined"
            type={inputType}
            helperText={errors.password}
            error={errors.password !== ""}
            sx={{ width: "100%", mb: 2 }}
            onChange={(e) => handleChange("password", e.currentTarget.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end" sx={{visibility: values.password.length ? 'visible' : 'hidden'}}>
                  <Box component={'span'} onClick={(e) =>{
                    e.preventDefault();
                    setInputType(inputType === "password" ? "text" : "password")}
                  }
                  >
                    {inputType === "password" ? 'SHOW' : 'HIDE'}
                  </Box>
                </InputAdornment>
              ),
            }}
                />
          <Typography variant="h6" sx={{ mb: 2, alingText: 'left' }}>
            <Box component="span">Forgot Password?</Box>
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{ width: "100%", }}
            type="submit"
            role="submit"
            onClick={(e) => {
              handleSubmit();
            }}
          >
            Login
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Welcome;
