import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { heIL } from "@mui/material/locale";
import components from "./components";

let theme: Theme = createTheme(
    {
        typography: {
            fontFamily: "Open Sans, sans-serif",
        },
        palette: {
            primary: {
                ...green,
            },
            secondary: {
                ...grey,
            },
        },
        components,
    },
    heIL
);
theme = responsiveFontSizes(theme);

export const BOTTOM_NAV_WIDTH = "90px";

export default theme;
