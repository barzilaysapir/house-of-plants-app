import { Theme, createTheme, responsiveFontSizes } from "@mui/material";
import { green, grey } from "@mui/material/colors";
import { heIL } from "@mui/material/locale";
import components from "./components";

let theme: Theme = createTheme(
    {
        direction: "rtl",
        typography: {
            fontFamily: "Open Sans, sans-serif",
            // fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
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

export default theme;
