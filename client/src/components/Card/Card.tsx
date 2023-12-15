import { FC, MouseEventHandler, PropsWithChildren } from "react";
import CardContent from "./CardContent";
import StyledCard, { StyledCardImage, StyledCardMedia } from "./Card.style";
import { CardData, CardImageSize } from "shared/types/card";
import useActiveDevice from "shared/hooks/useActiveDevice";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import ImageBackdrop from "components/ImageBackdrop";
import CardMenu from "./CardMenu/CardMenu";
import { MenuOption } from "shared/types/UI";

type CardProps = PropsWithChildren & {
    data: CardData;
    size?: CardImageSize;
    vertical?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    noWrap?: boolean;
    menuOptions?: MenuOption[];
};

const Card: FC<CardProps> = (props) => {
    const {
        data,
        size = CardImageSize.MEDIUM,
        vertical = false,
        children,
        onClick,
        noWrap,
        menuOptions,
    } = props;

    const { isMobile } = useActiveDevice();
    const isGalleryView = isMobile && vertical; // mobile grid view
    const { isOpen, toggle } = useToggleDisplay();

    return (
        <StyledCard vertical={Number(vertical)}>
            <StyledCardImage size={size} onClick={toggle}>
                <StyledCardMedia component="img" image={data.image} />
                <ImageBackdrop open={isOpen} image={data.image} />
            </StyledCardImage>

            {!isGalleryView && (
                <CardContent onClick={onClick} data={data} noWrap={noWrap}>
                    {children}
                </CardContent>
            )}

            {menuOptions && (
                <CardMenu
                    isGalleryView={isGalleryView}
                    options={menuOptions}
                    title={data.name}
                />
            )}
        </StyledCard>
    );
};

export default Card;
