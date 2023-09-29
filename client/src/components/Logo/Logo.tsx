import { StyledLogoTypography } from "./Logo.style";
import { Box } from "@mui/material";
import logo from "assets/icons/logo_leaf.png";

const Logo = () => {
    return (
        <Box
            sx={{
                mr: 2,
                display: "flex",
                flexGrow: 1,
                columnGap: 1,
            }}
        >
            <StyledLogoTypography component="a" href="/" noWrap>
                House of Plants
            </StyledLogoTypography>

            {/* <img src={logo} width={20} style={{ filter: "brightness(0.2)" }} /> */}

            {/* <SvgIcon component={LeafIcon} viewBox="2000 500 1 5500" /> */}
        </Box>
    );
};

export default Logo;
