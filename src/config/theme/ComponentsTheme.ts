import { Components } from "@mui/material";

const ComponentsTheme: Components = {
    MuiTooltip: {
        defaultProps: {
            enterTouchDelay: 0, //on mobile - show on click
        },
    },
    MuiAppBar: {
        defaultProps: {
            position: "relative",
        },
    },
    MuiDialog: {
        styleOverrides: {
            root: () => ({
                "& .MuiDialog-container": {
                    alignItems: "flex-end",
                    "& .MuiDialog-paper": {
                        height: "auto",
                        paddingBottom: "20px",
                    },
                },
            }),
        },
    },
    MuiToolbar: {
        styleOverrides: {
            root: () => ({
                justifyContent: "space-between",
            }),
        },
    },
    MuiButton: {
        styleOverrides: {
            contained: {
                color: "#fff",
            },
        },
    },
};

export default ComponentsTheme;
