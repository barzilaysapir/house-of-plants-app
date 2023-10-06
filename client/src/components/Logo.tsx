import { Box } from "@mui/material";
import logo from "assets/icons/logo_leaf_circle.png";

const Logo = () => {
    return (
        <Box className="logo-container" height={40}>
            <img src={logo} alt="House of Plants logo" height="100%" />
        </Box>
    );
};

export default Logo;
