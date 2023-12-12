import { Container, styled } from "@mui/material";
import { BOTTOM_NAV_WIDTH } from "config/theme/theme";

const StyledLayout = styled(Container)`
    ${({ theme }) => theme.breakpoints.up("sm")} {
        && {
            padding-inline-start: ${BOTTOM_NAV_WIDTH};
        }
    }
`;

export default StyledLayout;
