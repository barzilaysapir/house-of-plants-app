import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";
import theme from "config/theme";

export const StyledMenuIconBtn = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== "isGalleryView",
})<{
    isGalleryView: boolean;
}>`
    padding: 2px;
    margin: -5px;
    height: calc(100% + 10px);
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: inherit;
    display: ${({ isGalleryView }) => (isGalleryView ? "none" : "inline-flex")};
    &:hover {
        background-color: rgba(0, 0, 0, 0.06);
    }
`;

export const StyledDrawerHeader = styled(Box)`
    padding: ${theme.spacing(2)};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
