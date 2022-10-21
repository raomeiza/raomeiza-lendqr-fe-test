import React from "react";
import {
  AppBar,
  Toolbar,
  Popover,
  Box,
  TextField,
  IconButton,
  InputAdornment,
  styled,
} from "@mui/material";
import {Search, Menu, NotificationsOutlined } from "@mui/icons-material";
import union from "../resource/union.svg";
import adedeji from "../resource/adedeji.svg";
import logo from "../resource/logo.svg";
import { Display } from "../utils/device";
export const SearchBar = () => {
  return (
    <TextField
      id="outlined-search"
      label="Search for anything"
      type="search"
      variant="outlined"
      size="small"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="search"
              onClick={() => {
                console.log("search");
              }}
              edge="end"
            >
              <Search />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

const SearchPopover = (props: { open: any; anchorEl: any; setClose: any }) => {
const {open, anchorEl, setClose } = props
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      id="search-popover"
      onClose={() => {
        setClose(null);
      }}
      
    >
      <SearchBar />
    </Popover>
  )
}
        
export const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function MyAppBar(props: { toggleDrawer: any; }) {
  const { toggleDrawer } = props;
  const [popoverAnchorEl, setPopoverAnchorEl] = React.useState<null | HTMLElement>(null);
  const { isMobile, isTablet, isDesktop } = Display();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar sx={{ paddingTop: 1.5, paddingBottom: 1.5 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              {
                !isDesktop && (
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                    onClick={() => {
                      toggleDrawer();
                    }}
                  >
                    <Menu />
                  </IconButton>
                )
              }
              {
                isMobile ? (
              <Box >
                <img src={union} alt="lendsqr" />
              </Box>
                ) : (
                  <Box >
                    <img src={logo} alt="lendsqr" />
                  </Box>
                )
              }
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-center",
                alignItems: "center",
              }}
            >
              {!isMobile && !isTablet ? (
                <SearchBar />
              ) : (
                <IconButton
                  aria-label="search"
                  sx={{ fontSize: 40, borderStyle: "solid", borderWidth: 1 }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    setPopoverAnchorEl(e.currentTarget)
                  }}
                  onMouseLeave={() => {
                    setPopoverAnchorEl(null)
                  }}
                  aria-owns={popoverAnchorEl ? "search-popover" : undefined}
                  edge="end"
                >
                  <Search />
                  <SearchPopover open={!!popoverAnchorEl} anchorEl={popoverAnchorEl} setClose= { setPopoverAnchorEl }/>
                </IconButton>
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}
              >
                <IconButton className="icon-button">
                  <NotificationsOutlined />
                </IconButton>
                <IconButton className="icon-button">
                  <img
                    src={adedeji}
                    alt="adedeji"
                    style={{ width: 48, height: 48, borderRadius: "50%" }}
                  />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Offset />
    </>
  );
} /* lendsqr */
