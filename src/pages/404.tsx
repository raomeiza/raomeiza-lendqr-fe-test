import { Home, KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import oops from '../resource/Oops-404-Error-with-a-broken-robot-rafiki.svg'
const NotFound = (props: { paddingLeft?: string | number, staticDrawerWidth?: string | number; }) => {
  const navigate = useNavigate();
  const { paddingLeft, staticDrawerWidth } = props;
  return (
    <Box
      sx={{
        maxHeight: '100vh',
        overflow: 'clip',
        ...(!paddingLeft && { pl: paddingLeft }),
        '& img': {
          // if staticDrawer is provided, hight to the image
          // becouse its already optimised for mobile
          // else give it a heigth of 100%
          ...(!staticDrawerWidth && { height: '100%' }),
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