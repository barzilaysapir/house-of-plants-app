import styled from "@emotion/styled";
import PageHeader from "components/PageHeader";
import theme from "config/theme";

export const StyledPreviewPageHeader = styled(PageHeader)`
    position: absolute;
    bottom: -25px;
    background-color: rgb(196 220 255 / 0.5);
    padding-inline: ${theme.spacing(2)};
`;

export const StyledPlantImage = styled("img")`
    margin: -16px;
    width: -webkit-fill-available;
    aspect-ratio: 16 / 9;
    object-fit: cover;
`;
