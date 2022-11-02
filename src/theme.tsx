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
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif, Roboto , sans-serif',
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
    MuiListItemButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
          },
          '&.Mui-selected': {
            '&:before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '5px',
              backgroundColor: theme.palette.secondary.main,
            },
            backgroundColor: theme.palette.secondary.light,
          },
        }),
      },
    },
    // change ripple color on all buttons
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
          },
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.primary.main,
          height: '50px',
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          '&:hover': {
            backgroundColor: theme.palette.secondary.light,
          },
          //backgroundColor: theme.palette.secondary.main,
          color: theme.palette.text.primary,
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          height: '50px',
          width: '100%',
          // input adornment
          '& .MuiInputAdornment-root': {
            color: theme.palette.secondary.main,
            border: 'none',
            '&:hover': {
              cursor: 'pointer',
            },
            width: '60px',
            //textAlign: 'center',
            backgroundColor: 'transparent',
            // input adornment icon
            '& .MuiSvgIcon-root': {
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.secondary.main,
              '&:hover': {
                backgroundColor: theme.palette.secondary.light,
              },
              width: '65px',
              height: '40px',
              // end adornment
              '&.MuiInputAdornment-positionEnd': {
                alignItems: 'center',
                alignSelf: 'left',
                justifyContent: 'center',
                borderRadius: '0 8px 8px 0',
              }
            },
          },
        }),
      },
    },
  },
});
