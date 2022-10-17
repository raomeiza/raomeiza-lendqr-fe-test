import {
  Grid,
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
} from "@mui/material";
import * as React from "react";
import intro from "../resource/intro.svg";
import logo from "../resource/logo.svg";

function Welcome() {
  const [values, setValues] = React.useState({});
  const [inputType, setInputType] = React.useState("password");
  const handleChange = (element: string, value: string) => {
    setValues({ ...values, [element]: value });
  };
  return (
    <Grid container spacing={0} sx={{ height: "100vh", position: 'relative' }}>
      <img src={logo} alt="logo" sizes="150%"
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
        }}
      >
        <Box component="form">
          <Typography variant="h2" sx={{ mt: 2, mb: 2 }}>
            Welcome to the world of
          </Typography>
          <Typography variant="h5" sx={{ mb: 2 }}>
            <Box component="span" sx={{ color: "#F9A826" }}>
              Financio oiu
            </Box>
          </Typography>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ width: "100%", mb: 2 }}
            onChange={(e) => handleChange("email", e.currentTarget.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ width: "100%", mb: 2 }}
            inputProps={{
              type: "password",
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() =>
                      setInputType(
                        inputType === "password" ? "text" : "password"
                      )
                    }
                    onMouseDown={(event) => event.preventDefault()}
                    edge="end"
                    onChange={(e) =>
                      handleChange("email", e.currentTarget.value)
                    }
                  >
                    {inputType === "password" ? "Show" : "Hide"}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Typography variant="h6" sx={{ mb: 2 }}>
            <Box component="span" sx={{ color: "#F9A826" }}>
              Forgot Password?
            </Box>
          </Typography>
          <Button variant="contained" sx={{ width: "100%", mb: 2 }}>
            Login
          </Button>
          <Typography variant="h6" sx={{ mb: 2 }}>
            <Box component="span" sx={{ color: "#F9A826" }}>
              Don't have an account?
            </Box>
          </Typography>
          <Button variant="contained" sx={{ width: "100%", mb: 2 }}>
            Sign Up
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default Welcome;
