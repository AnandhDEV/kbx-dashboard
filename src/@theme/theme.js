import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export let theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: ({ theme }) => ({
          border: 0,
          color: theme.palette.text.primary,
          "& .MuiDataGrid-columnHeader:focus, & .MuiDataGrid-columnHeader:focus-within":
            {
              outline: "none",
            },
        }),
        toolbarContainer: ({ theme }) => ({
          paddingRight: `${theme.spacing(5)} !important`,
          paddingLeft: `${theme.spacing(3.25)} !important`,
        }),
        columnHeaders: ({ theme }) => ({
          backgroundColor: theme.palette.customColors.tableHeaderBg,
        }),
        columnHeader: ({ theme }) => ({
          "&:not(.MuiDataGrid-columnHeaderCheckbox)": {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            "&:first-of-type": {
              paddingLeft: theme.spacing(5),
            },
          },
          "&:last-of-type": {
            paddingRight: theme.spacing(5),
          },
        }),
        columnHeaderCheckbox: {
          maxWidth: "58px !important",
          minWidth: "58px !important",
        },
        columnHeaderTitleContainer: {
          padding: 0,
        },
        columnHeaderTitle: {
          fontWeight: 600,
          fontSize: "0.75rem",
          letterSpacing: "0.17px",
          textTransform: "uppercase",
        },
        columnSeparator: ({ theme }) => ({
          color: theme.palette.divider,
        }),
        row: {
          "&:last-child": {
            "& .MuiDataGrid-cell": {
              borderBottom: 0,
            },
          },
        },
        cell: ({ theme }) => ({
          borderColor: theme.palette.divider,
          "&:not(.MuiDataGrid-cellCheckbox)": {
            paddingLeft: theme.spacing(4),
            paddingRight: theme.spacing(4),
            "&:first-of-type": {
              paddingLeft: theme.spacing(5),
            },
          },
          "&:last-of-type": {
            paddingRight: theme.spacing(5),
          },
          "&:focus, &:focus-within": {
            outline: "none",
          },
        }),
        cellCheckbox: {
          maxWidth: "58px !important",
          minWidth: "58px !important",
        },
        editInputCell: ({ theme }) => ({
          padding: 0,
          color: theme.palette.text.primary,
          "& .MuiInputBase-input": {
            padding: 0,
          },
        }),
        footerContainer: ({ theme }) => ({
          borderTop: `1px solid ${theme.palette.divider}`,
          "& .MuiTablePagination-toolbar": {
            paddingLeft: `${theme.spacing(4)} !important`,
            paddingRight: `${theme.spacing(4)} !important`,
          },
          "& .MuiTablePagination-displayedRows, & .MuiTablePagination-selectLabel":
            {
              color: theme.palette.text.primary,
            },
        }),
        selectedRowCount: ({ theme }) => ({
          margin: 0,
          paddingLeft: theme.spacing(4),
          paddingRight: theme.spacing(4),
        }),
      },
    },
  },
  palette: {
    customColors: {
      tableHeaderBg: "#F9FAFC",
    },
    mode: "light",
    primary: {
      main: "#12232E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#007CC7",
      contrastText: "#fff",
    },
    error: {
      light: "#FF6166",
      main: "#FF4C51",
      dark: "#E04347",
      contrastText: "#fff",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    h1: {
      fontWeight: 500,
      letterSpacing: "-1.5px",
      color: "rgba(0, 0, 0, 0.87)",
    },
    h4: {
      fontWeight: 500,
      letterSpacing: "0.25px",
    },
    h5: {
      fontWeight: 500,
      letterSpacing: 0,
    },
    h6: {
      letterSpacing: "0.15px",
    },
    subtitle1: {
      letterSpacing: "0.15px",
    },
    subtitle2: {
      letterSpacing: "0.1px",
    },
  },
});

theme = responsiveFontSizes(theme);
