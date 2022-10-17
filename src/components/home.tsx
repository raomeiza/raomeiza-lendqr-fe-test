import * as React from "react";
import MiniDrawer, { minDrawerOnTablet } from "./drawer";
import MyAppBar from "./appBar";
import { Box, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Display } from "../utils/device";
import { maxDrawerWidth } from "./drawer";
import { Users } from "./users";
import Welcome from "./welcom";

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const { isMobile, isTablet, isDesktop } = Display();
  const ContentWidth = isDesktop
  ? `calc(100vw - ${maxDrawerWidth + 24}px)`
  : isTablet
  ? `calc(100vw - ${minDrawerOnTablet + 24}px)`
  : "calc(100vw - 24px)";
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Welcome />
      {/* <MyAppBar toggleDrawer={toggleDrawer} />
      <Box>
        <MiniDrawer open={open} toggleDrawer={toggleDrawer} />
        <Grid
          container
          sx={{
            mt: 10,
            // pad the content to accomodate the drawer
            // as the drawer is fixed, we need to pad the content
            // i prefer padding the content instead of margin the drawer
            pl: isDesktop
              ? `${maxDrawerWidth + 12}px`
              : isTablet
              ? `${minDrawerOnTablet + 12}px`
              : 2,
            pr: !isMobile ? "12px" : "20px",
            // set the children min width to 100%
            // so that the children will not shrink
            // when the screen is too small
            '& > *': {
              minWidth: isMobile ? `calc(100% - 40px)` : isTablet ? `calc(100% - 24px)` : `calc(100% - 12px)`,
            },
          }}
          component="main"
        >
          <Users width={ContentWidth}/>
        </Grid>
      </Box> */}
    </Box>
  );
}

// Language: typescript
// Path: src\components\home.tsx
// Compare this snippet from src\App.tsx:
// import React from 'react';
// import logo from './resource/adedeji.svg';
// import './App.scss';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
