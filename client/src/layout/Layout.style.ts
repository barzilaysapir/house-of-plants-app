import { Container, styled } from "@mui/material";
import theme, { BOTTOM_NAV_WIDTH } from "config/theme/theme";

const StyledLayout = styled(Container)`
    height: 100%;
    ${({ theme }) => theme.breakpoints.up("sm")} {
        && {
            padding-inline-start: ${BOTTOM_NAV_WIDTH};
        }
    }
`;

export const StyledLayoutChildren = styled(Container)`
    height: 100%;
    padding-bottom: ${theme.spacing(10)};
`;

export default StyledLayout;
