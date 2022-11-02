import {
  Grid,
  Modal,
  CircularProgress,
} from "@mui/material";
import * as React from "react";
import intro from "../resource/intro.svg";
import logo from "../resource/logo.svg";
import { Display } from "../utils/device";
import Login from "./login/login";

// create a regex for email

function Welcome() {
  const [showLoading, setShowLoading ] = React.useState(false)
  

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
        <Login setShowLoading={setShowLoading} />
      </Grid>
    </Grid>
  );
}

export default Welcome;
