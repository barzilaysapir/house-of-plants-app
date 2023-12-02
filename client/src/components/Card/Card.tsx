import { FC, ReactNode } from "react";
import CardContent from "./CardContent";
import StyledCard, {
    StyledCardActionArea,
    StyledCardImage,
    StyledCardMedia,
} from "./Card.style";
import { CardData, CardImageSize } from "shared/types/card";
import useActiveDevice from "shared/hooks/useActiveDevice";

type CardProps = {
    data: CardData;
    size?: CardImageSize;
    vertical?: boolean;
    children?: ReactNode;
    onClick?: (data: CardData) => void;
};

const Card: FC<CardProps> = (props) => {
    const {
        data,
        size = CardImageSize.MEDIUM,
        vertical = false,
        children,
        onClick = () => null,
    } = props;

    const { isMobile } = useActiveDevice();
    const isGalleryView = isMobile && vertical; // mobile grid view

    return (
        <StyledCardActionArea onClick={() => onClick(data)}>
            <StyledCard vertical={Number(vertical)}>
                <StyledCardImage size={size}>
                    <StyledCardMedia component="img" image={data.image} />
                </StyledCardImage>

                {!isGalleryView && (
                    <CardContent data={data}>{children}</CardContent>
                )}
            </StyledCard>
        </StyledCardActionArea>
    );
};

export default Card;
