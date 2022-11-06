import * as React from "react";
import MiniDrawer, { minDrawerOnTablet, maxDrawerWidth } from "../components/drawer";
import MyAppBar from "../components/appBar";
import { Box, Grid } from "@mui/material";
import { Display } from "../utils/device";
import { Users } from "./users/users";
import { Route, Routes } from "react-router-dom";
import { User } from "./users";
import NotFound from "./404";

export default function Base() {
  const [open, setOpen] = React.useState(false);
  const { isMobile, isTablet, isDesktop } = Display();

  const ContentWidth = isDesktop
    ? `calc(100vw - ${maxDrawerWidth + 80}px)`
    : isTablet
    ? `calc(100vw - ${minDrawerOnTablet + 80}px)`
    : "calc(100vw - 24px)";

  const paddingLeft = isDesktop
    ? `${maxDrawerWidth + 40}px`
    : isTablet
    ? `${minDrawerOnTablet + 40}px`
    : 2;

  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <MyAppBar toggleDrawer={toggleDrawer} />
      <Box>
        <MiniDrawer open={open} toggleDrawer={toggleDrawer} />
        <Grid
          container
          sx={{
            mt: 10,
            // pad the content to accomodate the drawer
            // as the drawer is fixed, we need to pad the content
            // i prefer padding the content instead of margin the drawer
            pl: paddingLeft,
            pr: !isMobile ? "20px" : "20px",
            // set the children min width to 100%
            // so that the children will not shrink
            // when the screen is too small
            "& > *": {
              minWidth: isMobile ? `calc(100% - 40px)` : `calc(100% - 40px)`,
            },
          }}
          component="main"
        >
          <Routes>
            <Route path="/" element={<Users width={ContentWidth} />} />
            <Route path="/user/:id" element={<User width={ContentWidth} />} />
            <Route path="*" element={<NotFound paddingLeft={paddingLeft} staticDrawerWidth={isMobile ? 0 : isDesktop ? maxDrawerWidth : minDrawerOnTablet} isDesktop={isDesktop} />} />
          </Routes>
        </Grid>
      </Box>
    </Box>
  );
}
