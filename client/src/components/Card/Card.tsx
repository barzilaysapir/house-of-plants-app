import { FC, MouseEventHandler, PropsWithChildren } from "react";
import CardContent from "./CardContent";
import StyledCard, { StyledCardImage, StyledCardMedia } from "./Card.style";
import { CardData, CardImageSize } from "shared/types/card";
import useActiveDevice from "shared/hooks/useActiveDevice";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import ImageBackdrop from "components/ImageBackdrop";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton } from "@mui/material";
import i18n from "config/locales/i18n";

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

            <IconButton
                aria-label={i18n.t("settings")}
                sx={{
                    alignSelf: "flex-start",
                    padding: "2px",
                    display: isGalleryView ? "none" : "inline-flex",
                }}
            >
                <MoreVertIcon />
            </IconButton>
        </StyledCard>
    );
};

export default Card;
