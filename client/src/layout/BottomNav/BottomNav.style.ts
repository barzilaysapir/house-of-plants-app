import { Paper, styled } from "@mui/material";

export const StyledBottomNavWrapper = styled(Paper)`
    z-index: ${({ theme }) => theme.zIndex.appBar + 1};

    ${({ theme }) => theme.breakpoints.down("sm")} {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    ${({ theme }) => theme.breakpoints.up("sm")} {
        position: relative;
        padding-block: ${({ theme }) => theme.spacing(2)};
        & .MuiBottomNavigation-root {
            width: 90px;
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
