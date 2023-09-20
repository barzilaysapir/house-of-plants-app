import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

type StylesLogoTypoProps = {
    component: string;
    href: string;
}

export const StyledLogoTypo = styled(Typography) <StylesLogoTypoProps>`
    font-family: monospace;
    font-weight: 700;
    letter-spacing: .3rem;
    color: inherit;
    text-decoration: none;
`;

const StyledLogo = styled(Box)({

});

export default StyledLogo;