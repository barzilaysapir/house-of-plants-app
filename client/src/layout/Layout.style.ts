import { Container, Stack, styled } from "@mui/material";
import theme, { BOTTOM_NAV_WIDTH, NAVS_HEIGHT } from "config/theme/theme";

const StyledLayout = styled(Container)`
    height: 100%;
    ${({ theme }) => theme.breakpoints.up("sm")} {
        && {
            padding-inline-start: ${BOTTOM_NAV_WIDTH};
        }
    }
`;

export const StyledLayoutChildren = styled(Stack)`
    height: calc(100% - ${NAVS_HEIGHT} * 2);
    padding-inline: ${theme.spacing(1)};
`;

export default StyledLayout;
