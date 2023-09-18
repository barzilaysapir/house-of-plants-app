import { createTheme, responsiveFontSizes } from "@mui/material";
import { heIL } from '@mui/material/locale';

let theme = createTheme({
    direction: "rtl",
    typography: {
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif"
    },
}, heIL);
theme = responsiveFontSizes(theme);

export default theme;