import { Home } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { CardBox } from "./card";
import { maxDrawerWidth, minDrawerOnTablet } from "./drawer";
import { Display } from "../utils/device";
import {
  BoxUsersSVG,
  ActiveUsersSVG,
  UsersWithLoansSVG,
  UsersWithSavingsSVG,
} from "../resource/icons";
import MyTable from "./table";
import DataTable from "./dataTable";
export const Users = (props: { width: any; }) => {
  const contentWidth = props.width;
  const { isTablet, isDesktop } = Display();
  return (
    <>
      <Typography
        variant="h2"
        component="h1"
        gutterBottom
        fontWeight="bold"
        sx={{
          // take all the available space
          alignSelf: "left",
          width: "100%",
        }}
      >
        User
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "flex-start",
          width: contentWidth,
          gap: 2,
        }}
        >
        <Box
          sx={{
            overflowX: "scroll",
            width: "100%",
            // hide the scrollbar
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "stretch",
              overflow: "scroll",
              width: isDesktop ? contentWidth : "max-content",
              ...(!isDesktop && { gap: 3 }),
            }}
          >
            <CardBox title="USERS" count={"2,453"} Icon={BoxUsersSVG} />
            <CardBox
              title="ACTIVE USERS"
              count={"2,453"}
              Icon={ActiveUsersSVG}
            />
            <CardBox
              title="USERS WITH LOANS"
              count={"12,453"}
              Icon={UsersWithLoansSVG}
            />
            <CardBox
              title="USERS WITH SAVINGS"
              count={"102,453"}
              Icon={UsersWithSavingsSVG}
            />
          </Box>
        </Box>
        {/* <Box
          sx={{
            width: contentWidth,
            overflow: "scroll",
          }}
        >
          <MyTable />
        </Box> */}
        <Box>
          <DataTable 
              contentWidth={contentWidth}
          />  
        </Box>
        <Box></Box> {/* last gap */}
      </Box>
    </>
  );
};
