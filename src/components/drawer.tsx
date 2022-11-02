import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import {
  Box,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
} from "@mui/material";
import { ExpandMore, } from "@mui/icons-material";
import { Display } from "../utils/device";
import myNavLinks, { Link as myLinkInterface } from "../data/links";
import { OrgSVG } from "../resource/icons";
import { Link } from "react-router-dom";
export const maxDrawerWidth = 240;
export const minDrawerOnTablet = 64;

const openedMixin = (theme: Theme): CSSObject => ({
  width: maxDrawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme, isMobile: boolean): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: isMobile ? 0 : minDrawerOnTablet,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  marginTop: 50,
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer(props: {
  open: boolean;
  toggleDrawer: any;
}) {
  const { isMobile, isTablet, isDesktop } = Display();
  // set the size of the drawer, the main content and the appbar on the context
  // based on the device
  
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <SwipeableDrawer
        variant={
          isMobile
            ? "temporary"
            : // although i want a semi open drawer on tablet which means i must use the permanent or persistent variant,
            // when opened, it will push the contents of the page and i don't want that
            // i want it to float over so it variant must be temporary when opened
            // moreover, it's only the temporary variant that allows swiping to open and close
            props.open && isTablet
            ? "temporary"
            : "permanent"
        }
        open={props.open}
        onOpen={props.toggleDrawer}
        onClose={props.toggleDrawer}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          ...(!props.open &&
            !isDesktop && {
              ...closedMixin(theme, isMobile),
              "& .MuiDrawer-paper": closedMixin(theme, isMobile),
            }),
          ...(props.open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
          }),
        }}
        anchor="left"
      >
        <DrawerHeader></DrawerHeader>
        <List
          component="nav"
          dense
          aria-labelledby="nested-list-subheader"
          sx={{
            opacity: 0.9,
            fontWeight: "bold",
            justifyContent: props.open ? "start" : "center",
            ml: 0,
          }}
          subheader={
            <ListSubheader
              component="div"
              id="main"
              sx={{
                fontWeight: "bold",
                height: 20,
                mb: 1.5,
                ml: 1,
                // if the drawer is closed, the subheader should be hidden
                // except on desktop
                opacity: props.open ? 0.9 : isTablet ? 0 : 0.9,
                color: "text.primary",
              }}
            >
              <ListItemButton>
                <Typography
                  variant="body2"
                  sx={{
                    // center all elements horizontally
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <OrgSVG /> Change Organization <ExpandMore />
                </Typography>
              </ListItemButton>
            </ListSubheader>
          }
        />

        {myNavLinks.map((link: myLinkInterface) => (
          <List
            key={link.name}
            component="nav"
            dense
            aria-labelledby="nested-list-subheader"
            sx={{
              opacity: 0.9,
              fontWeight: "bold",
              justifyContent: props.open ? "flex-start" : "center",
            }}
            subheader={
              <ListSubheader
                component="div"
                id={link.name}
                sx={{
                  fontWeight: "bold",
                  height: 20,
                  mb: 2,
                  ml: 1,
                  opacity: props.open ? 0.9 : isDesktop ? 0.9 : 0,
                  color: "text.primary",
                }}
              >
                {link.name.toUpperCase()}
              </ListSubheader>
            }
          >
            {link.entries.map((entry: { title: string; link: string; icon: React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
              <ListItem
                key={entry.title}
                disablePadding
                sx={{ display: "block" }}
              >
                <ListItemButton
                  key={entry.title}
                  component={Link}
                  to={entry.link}
                  // set this as selected if the current path starts with the link followed by a slash
                  selected={window.location.pathname.startsWith(`/lendsqr${entry.link}`)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: props.open ? 3 : 2,
                      ml: isTablet ? 1 : 0,
                      justifyContent: "start",
                    }}
                  >
                    {entry.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={entry.title}
                    sx={{
                      opacity: props.open ? 0.9 : isDesktop ? 0.9 : 0,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        ))}
      </SwipeableDrawer>
    </Box>
  );
}
