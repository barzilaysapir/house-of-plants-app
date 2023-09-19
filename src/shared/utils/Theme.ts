import { createTheme, responsiveFontSizes } from "@mui/material";
import { green } from "@mui/material/colors";
import { heIL } from '@mui/material/locale';

let theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    },
    palette: {
        primary: {
            ...green
        },
    },
}, heIL);
theme = responsiveFontSizes(theme);

export default theme;