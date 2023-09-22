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
    MuiToolbar: {
        styleOverrides: {
            root: () => ({
                justifyContent: "space-between"
            })
        }
    },
    MuiButton: {
        styleOverrides: {
            contained: {
                color: "#fff"
            }
        },
    },
};

export default ComponentsTheme;
