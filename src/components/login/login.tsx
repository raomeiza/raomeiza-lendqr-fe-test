import { Box, Typography, TextField, InputAdornment, Button } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate, } from "react-router-dom";

import { useAuth } from "../../contexts/authContext";

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
// create a regex for password. it must contain at least 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const Login = (props: { setShowLoading: any; }) => {
  const navigate = useNavigate();
  const { setShowLoading } = props;
  const [values, setValues] = React.useState({ email: "", password: "" });
  const [inputType, setInputType] = React.useState("password");
  const from = useLocation().state?.from || "/users";

  const handleSubmit = () => {
    if (values.email && values.password) {
      let validEmail = emailRegex.test(values.email);
      let validPassword = passwordRegex.test(values.password);
      if (validEmail && validPassword) {
        signin({ email: values.email, password: values.password });
        setShowLoading && setShowLoading(true)
        setTimeout(() => {
          if (user) {
            navigate(from);
          }
          setShowLoading && setShowLoading(false)
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

  const [errors, setErrors] = useState({ email: "", password: "" });
  // @ts-ignore
  const { signin, user } = useAuth();
  const handleChange = (element: string, value: string) => {
    setValues({ ...values, [element]: value });
  };
  return (
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
      aria-label="email"
      name="email"
      helperText={errors.email}
      error={errors.email !== ""}
      sx={{ width: "100%", mb: 5 }}
      onChange={(e) => handleChange("email", e.currentTarget.value)}
    />
    <TextField
      id="password-input"
      label="Password"
      variant="outlined"
      type={inputType}
      name="password"
      helperText={errors.password}
      error={errors.password !== ""}
      sx={{ width: "100%", mb: 5 }}
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
    <Typography variant="h6" sx={{ mb: 2, textAlign: 'left', color: 'secondary.main' }}>
      <Box component="span">Forgot Password?</Box>
    </Typography>
    <Button
      variant="contained"
      size="large"
      sx={{ width: "100%", }}
      type="submit"
      role="submit"
      name="submit"
      onClick={(e) => {
        handleSubmit();
      }}
    >
      Login
    </Button>
  </Box>
  );
};

export default Login;