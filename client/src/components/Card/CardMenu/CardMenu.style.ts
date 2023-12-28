import styled from "@emotion/styled";
import { Box, Drawer, IconButton } from "@mui/material";
import theme from "config/theme";

export const StyledCardMenuIconBtn = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== "isGalleryView",
})<{
    isGalleryView?: boolean;
}>`
    padding: 2px;
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: inherit;
    display: ${({ isGalleryView }) => (isGalleryView ? "none" : "inline-flex")};
    &:hover {
        background-color: rgba(0, 0, 0, 0.06);
    }
`;

export const StyledCardMenuOpenBtn = styled(StyledCardMenuIconBtn)`
    height: calc(100% + 10px);
    margin: -5px;
`;

export const StyledCardMenuCloseBtn = styled(StyledCardMenuIconBtn)`
    height: 100%;
    margin: unset;
`;

export const StyledCardMenuHeader = styled(Box)`
    padding: ${theme.spacing(2)};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const StyledCardMenuMobile = styled(Drawer)`
    ${theme.breakpoints.down("md")} {
        display: block;
    }
    ${theme.breakpoints.up("md")} {
        display: none;
    }
    & .MuiDrawer-paper {
        flex-direction: row;
        width: 240px;
    }
`;
