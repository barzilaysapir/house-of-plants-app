import styled from "@emotion/styled";
import { Box, IconButton } from "@mui/material";
import theme from "config/theme";

export const StyledMenuIconBtn = styled(IconButton, {
    shouldForwardProp: (prop) => prop !== "isGalleryView",
})<{
    isGalleryView: boolean;
}>`
    align-self: flex-start;
    padding: 2px;
    display: ${({ isGalleryView }) => (isGalleryView ? "none" : "inline-flex")};
`;

export const StyledDrawerHeader = styled(Box)`
    padding: ${theme.spacing(2)};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
