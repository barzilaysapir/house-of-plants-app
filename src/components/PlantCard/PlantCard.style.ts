import styled from "@emotion/styled";
import { Box, CardActionArea, CardContent, CardMedia } from "@mui/material";

export const StyledPlantCardImage = styled(Box)`
    border-radius: inherit;
`;

type StyledCardMediaProps = {
    component: string;
    image: string;
}

export const StyledCardMedia = styled(CardMedia)<StyledCardMediaProps>({
    borderRadius: "inherit",
    height: 100,
});

export const StyledPlantCardContent = styled(CardContent)`
    padding: 5px 10px;
`;

type StyledCardActionAreaProps = {
    horizontal: number
}

export const StyledCardActionArea = styled(CardActionArea) <StyledCardActionAreaProps>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: ${({ horizontal }) => horizontal ? "row" : "column"};
`;

const StyledPlantCard = styled(Box)`
`;

export default StyledPlantCard;