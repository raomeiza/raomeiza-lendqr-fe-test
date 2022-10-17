import * as React from "react";
import {
  DataGrid,
  GridColDef,
  gridPageCountSelector,
  gridPageSelector,
  GridValueGetterParams,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import fetchClient from "../utils/fetchClient";
import mockData from "../resource/mock.json";
import { Box, Button, MenuItem, Pagination, Select } from "@mui/material";
const data = JSON.parse(JSON.stringify(mockData));
const columns: GridColDef[] = [
  {
    field: "orgName",
    headerName: "ORGANIZATION",
    width: 200,
    editable: false,
  },
  {
    field: "userName",
    headerName: "USERNAME",
    width: 200,
    editable: false,
  },
  {
    field: "email",
    headerName: "EMAIL",
    width: 200,
    editable: false,
  },
  {
    field: "phoneNumber",
    headerName: "PHONE NUMBER",
    width: 200,
    editable: false,
  },
  {
    field: "createdAt",
    headerName: "DATE JOINED",
    width: 200,
    editable: false,
    valueFormatter: (params) => {
      const date = new Date(params.value as string);
      // return date like Apr 30, 2020 10:00 AM
      return date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
      });
    },
  },
];
const rowsPerPageOptions = [10, 20, 50, 100];
function CustomPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const pageSize = useGridSelector(apiRef, (state: { pagination: { pageSize: any; }; }) => state.pagination.pageSize);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "stretch",
        mt: 2,
        overflowX: "scroll",
        height: "50px",
      }}
    >
      {/* rows per page */}
      <Box>
        Showing: {`${page * pageSize + 1} - ${page * pageSize + pageSize} of ${data.length}`}
        {/* select input for selecting rows per page */}
        <Select
          sx={{
            ml: 2,
            // align to start
            alignSelf: "flex-start",
            backgroundColor: "white",
            height: "35px",
            overflow: "hidden",
          }}
          value={pageSize}
          onChange={(e) => {
            // update rows per page
            apiRef.current.setPageSize(Number(e.target.value));
          }}
          size="small"
          variant= 'outlined'
        >
          {rowsPerPageOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </Box>
      {/* pagination */}

      <Pagination
        color="primary"
        count={pageCount}
        page={page + 1}
        onChange={(event, value) => apiRef.current.setPage(value - 1)}
        sx={{
          // set the radius of each page button to 3
          "& .MuiPaginationItem-root": {
            borderRadius: 2,
          },
        }}
      />
    </Box>
  );
}

const rows = data;
export default function DataTable(props: { contentWidth: any; }) {
  const contentWidth = props.contentWidth;
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  return (
    <Box
      sx={{
        backgroundColor: "Background.paper",
      }}
    >
      <DataGrid
      autoHeight
        sx={{
          width: contentWidth,
          backgroundColor: "white",
          "& .MuiDataGrid-cell:hover": {
            backgroundColor: "Background.default",
          },
          padding: 2,
        }}
        rows={rows}
        columns={columns}
        pageSize={rowsPerPage}
        rowsPerPageOptions={rowsPerPageOptions}
        onPageSizeChange={(newPageSize) => {
          setRowsPerPage(newPageSize);
        }}
        disableSelectionOnClick
        disableColumnSelector
        disableColumnMenu
        disableDensitySelector
        components={{
          Footer: CustomPagination,
        }}
      />
    </Box>
  );
}
