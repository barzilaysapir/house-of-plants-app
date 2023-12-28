import { Paper, styled } from "@mui/material";
import { BOTTOM_NAV_WIDTH } from "config/theme/theme";

export const StyledBottomNavWrapper = styled(Paper)`
    z-index: ${({ theme }) => theme.zIndex.appBar + 1};

    ${({ theme }) => theme.breakpoints.down("sm")} {
        position: relative;
    }

    ${({ theme }) => theme.breakpoints.up("sm")} {
        position: fixed;
        bottom: 0;
        top: 0;
        inset-inline-start: 0;
        padding-block: ${({ theme }) => theme.spacing(2)};
        & .MuiBottomNavigation-root {
            width: ${BOTTOM_NAV_WIDTH};
            flex-direction: column;
            text-align: center;
            height: auto;
            gap: ${({ theme }) => theme.spacing(2)};
            & .MuiBottomNavigationAction-root {
                padding-block: ${({ theme }) => theme.spacing(1)};
                & .MuiBottomNavigationAction-label {
                    height: 15px;
                }
            }
        }
        .logo-container {
            margin-bottom: ${({ theme }) => theme.spacing(0.5)};
        }
    }
`;
