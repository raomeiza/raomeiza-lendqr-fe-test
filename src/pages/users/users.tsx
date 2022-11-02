import {
  Box,
  Typography,
} from "@mui/material";
import { CardBox } from "../../components/card";
import { Display } from "../../utils/device";
import {
  BoxUsersSVG,
  ActiveUsersSVG,
  UsersWithLoansSVG,
  UsersWithSavingsSVG,
} from "../../resource/icons";
import DataTable from "../../components/dataTable";
import React from "react";

export const Users = (props: { width: any; }) => {
  const contentWidth = props.width;
  const { isDesktop } = Display();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  });
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
          width: "100%",
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
              width: isDesktop ? '100%' : "max-content",
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
              dataUrl="https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
          />  
        </Box>
        <Box></Box> {/* last gap */}
      </Box>
    </>
  );
};
