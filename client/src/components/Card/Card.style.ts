import styled from "@emotion/styled";
import {
    Box,
    CardActionArea,
    CardContent,
    CardMedia,
    Paper,
} from "@mui/material";
import theme from "config/theme";
import { ImgHTMLAttributes } from "react";
import { CardImageSize } from "shared/types/card";

export const StyledCardImage = styled(Box)<{
    size: CardImageSize;
}>`
    border-radius: inherit;
    flex-basis: ${({ size }) => {
        switch (size) {
            case CardImageSize.SMALL:
                return "80px;";
            case CardImageSize.MEDIUM:
                return "140px;";
            case CardImageSize.LARGE:
                return "200px;";
            default:
                break;
        }
    }};
`;

export const StyledCardMedia = styled(CardMedia)<
    ImgHTMLAttributes<HTMLButtonElement> & {
        component: string;
        image: string;
    }
>`
    border-radius: inherit;
    aspect-ratio: 1 / 1;
`;

export const StyledCardContent = styled(CardContent)`
    padding: 5px 10px;
    flex: 1;
    min-width: 0;
    :last-child {
        padding-bottom: 5px;
    }
`;

const StyledCard = styled(Paper)<{
    vertical: number;
}>`
    display: flex;
    box-sizing: border-box;
    justify-content: flex-start;
    flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
    padding: ${theme.spacing(1)};
    border-radius: ${theme.spacing(2)};
    box-shadow: 0px 0px 10px rgb(173 173 173 / 0.2);
`;

export default StyledCard;
