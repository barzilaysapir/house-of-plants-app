import styled from "@emotion/styled";
import { Typography, TypographyProps } from "@mui/material";

type StylesLogoTypographyProps = TypographyProps & Pick<HTMLAnchorElement, "href">;

export const StyledLogoTypography = styled(Typography)<StylesLogoTypographyProps>`
    font-family: monospace;
    font-weight: 700;
    letter-spacing: 0.3rem;
    color: inherit;
    text-decoration: none;
`;
