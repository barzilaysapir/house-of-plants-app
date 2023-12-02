import { FC } from "react";
import StyledCard, {
    StyledCardMedia,
    StyledCardContent,
    StyledCardImage,
} from "./Card.style";
import { CardImageSize } from "shared/types/card";
import { Skeleton } from "@mui/material";

type CardSkeletonProps = {
    vertical?: boolean;
    size: CardImageSize;
};

const CardSkeleton: FC<CardSkeletonProps> = (props) => {
    const { vertical = false, size } = props;

    return (
        <StyledCard vertical={Number(vertical)}>
            <StyledCardImage size={size}>
                <StyledCardMedia component="" image="">
                    <Skeleton sx={{ height: "100%", transform: "scale(1)" }} />
                </StyledCardMedia>
            </StyledCardImage>

            <StyledCardContent>
                <Skeleton sx={{ transform: "scale(1)" }} />
                <Skeleton sx={{ transform: "scale(1)", marginTop: 1 }} />
            </StyledCardContent>
        </StyledCard>
    );
};

export default CardSkeleton;
