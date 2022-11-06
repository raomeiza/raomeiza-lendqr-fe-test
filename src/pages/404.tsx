import { Home, KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import oops from '../resource/Oops-404-Error-with-a-broken-robot-rafiki.svg'
const NotFound = (props: { paddingLeft?: string | number, staticDrawerWidth?: string | number, isDesktop?: boolean; }) => {
  const navigate = useNavigate();
  const { paddingLeft, staticDrawerWidth, isDesktop } = props;
  return (
    <Box
      sx={{
        maxHeight: '100vh',
        overflow: 'clip',
        // if there is padding left i.e in desktop and tablet
        // where we have static side bar, pad the 404 content
        // acordingly else 
        // leave as is
        ...(!paddingLeft && { pl: paddingLeft }),
        '& img': {
          // if the display is desktop i.e isDesktop is true
          // set the image height to 100% so as to make the
          // image well contained
          // else remove the heigth as the image is optimized for
          // mobile and tablet
          ...(isDesktop && { height: '100%' }),
          objectFit: 'contain',
          objectPosition: 'center',
          overflow: 'clip',
          position: 'absolute',
          top: 0,
          left: staticDrawerWidth || 0,
          right: 0,
          bottom: 0,
          margin: 'auto',
        },
      }}
    >
      <img src={oops} alt="oops" />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          width: '100%',
          height: 'max-content',
          padding: 2,
          gap: 5,
        }}
      >
        <Typography variant="h5" sx={{ }} component={Button}
          startIcon={<KeyboardDoubleArrowLeft />}
          onClick={() => navigate(-1)}
        >
        Back
        </Typography>
        <Typography variant="h5" sx={{  }} component={Button}
          endIcon={<Home />}
          onClick={() => navigate('/')}
        >
          Home
        </Typography>
     </Box>
    </Box>
  );
}

export default NotFound;