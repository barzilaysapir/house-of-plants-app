import { useMediaQuery, useTheme } from "@mui/material";

const useActiveDevice = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return {
        isMobile,
    };
};

export default useActiveDevice;
