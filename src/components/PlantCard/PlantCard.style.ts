import styled from "@emotion/styled";
import { Box, Card, CardContent, CardMedia } from "@mui/material";

type StyledCardMediaProps = {
    component: string;
    image: string;
}

type StyledCardProps = {
    horizontal: number
}


export const StyledPlantCardImage = styled(Box)`
    border-radius: inherit;
    flex: 0 1 140px;
`;

export const StyledCardMedia = styled(CardMedia) <StyledCardMediaProps>`
    border-radius: inherit;
    aspect-ratio: 1 / 1;
`;

export const StyledPlantCardContent = styled(CardContent)`
    padding: 5px 10px;
    flex: 1;
`;

export const StyledPlantCard = styled(Card) <StyledCardProps>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    box-shadow: 0px 0px 10px rgb(173 173 173 / 0.2);
    flex-direction: ${({ horizontal }) => horizontal ? "row" : "column"};
`;

export default StyledPlantCard;
