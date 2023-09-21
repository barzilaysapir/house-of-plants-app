import { createTheme, responsiveFontSizes } from "@mui/material";
import { green } from "@mui/material/colors";
import { heIL } from '@mui/material/locale';

let theme = createTheme(
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
        },
        components: {
            MuiTooltip: {
                defaultProps: {
                    enterTouchDelay: 0, //on mobile - show on click
                },
            },
        },
    },
    heIL
);
theme = responsiveFontSizes(theme);

export default theme;