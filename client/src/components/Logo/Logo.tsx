import { ReactComponent as LeafIcon } from "assets/icons/leaf.svg";
import SvgIcon from "@mui/icons-material/QrCodeScanner";
import { StyledLogoTypography } from "./Logo.style";
import { Box } from "@mui/material";

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

            <SvgIcon component={LeafIcon} viewBox="2000 500 1 5500" />
        </Box>
    );
};

export default Logo;
