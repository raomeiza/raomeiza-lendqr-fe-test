import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    primary: {
      main: '#fff',
    },
    secondary: {
      main: '#39CDCC',
      dark: '#2B7A78',
      light: '#E5F5F4',
    },
    text: {
      primary: '#213F7D',
      secondary: '#000000',
    },
    background: {
      default: '#E5E5E5',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: 'work sans',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h5: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h6: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 700,
      lineHeight: 1.5,
    },
    caption: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 400,
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          hover: {
            backgroundColor: theme.palette.secondary.main,
          },
        }),
      },
    },
  },
});
// position: absolute;
// left: 47.71%;
// right: 48.4%;
// top: 30%;
// bottom: 30%;

// background: #39CDCC;
