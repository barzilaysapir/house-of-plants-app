import { FC, MouseEventHandler, PropsWithChildren } from "react";
import CardContent from "./CardContent";
import StyledCard, { StyledCardImage, StyledCardMedia } from "./Card.style";
import { CardData, CardImageSize } from "shared/types/card";
import useActiveDevice from "shared/hooks/useActiveDevice";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import ImageBackdrop from "components/ImageBackdrop";

type CardProps = PropsWithChildren & {
    data: CardData;
    size?: CardImageSize;
    vertical?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    noWrap?: boolean;
};

const Card: FC<CardProps> = (props) => {
    const {
        data,
        size = CardImageSize.MEDIUM,
        vertical = false,
        children,
        onClick,
        noWrap,
    } = props;

    const { isMobile } = useActiveDevice();
    const isGalleryView = isMobile && vertical; // mobile grid view
    const { isOpen, handleOpen, handleClose } = useToggleDisplay();

    return (
        <StyledCard vertical={Number(vertical)}>
            <StyledCardImage size={size} onClick={handleOpen}>
                <StyledCardMedia component="img" image={data.image} />
            </StyledCardImage>

            <ImageBackdrop
                open={isOpen}
                onClick={handleClose}
                image={data.image}
            />

            {!isGalleryView && (
                <CardContent onClick={onClick} data={data} noWrap={noWrap}>
                    {children}
                </CardContent>
            )}
        </StyledCard>
    );
};

export default Card;
