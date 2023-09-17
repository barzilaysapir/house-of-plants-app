import { createTheme, responsiveFontSizes } from "@mui/material";
import { deDE, heIL } from '@mui/material/locale';

let theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    },
}, heIL, deDE);
theme = responsiveFontSizes(theme);

export default theme;