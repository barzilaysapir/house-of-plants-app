import { FC } from "react";
import { Box } from "@mui/material";
import i18n from "config/locales/i18n";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MenuOption } from "shared/types/UI";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { StyledMenuIconBtn } from "./CardMenu.style";
import CardMenuList from "./CardMenuList";
import useCardMenu from "./useCardMenu";

type CardMenuProps = {
    title: string;
    isGalleryView: boolean;
    options: MenuOption[];
};

const CardMenu: FC<CardMenuProps> = (props) => {
    const { title, isGalleryView, options } = props;

    const {
        onOpenClick,
        handleCloseDesktop,
        handleCloseMobile,
        isOpenMobile,
        desktopAnchor,
    } = useCardMenu();

    return (
        <Box>
            <StyledMenuIconBtn
                aria-label={i18n.t("settings")}
                onClick={onOpenClick}
                isGalleryView={isGalleryView}
            >
                <MoreVertIcon />
            </StyledMenuIconBtn>

            <DesktopMenu
                anchorElSettings={desktopAnchor}
                handleClosePagesMenu={handleCloseDesktop}
            >
                <CardMenuList options={options} />
            </DesktopMenu>

            <MobileMenu
                isOpen={isOpenMobile}
                handleClose={handleCloseMobile}
                title={title}
            >
                <CardMenuList options={options} />
            </MobileMenu>
        </Box>
    );
};

export default CardMenu;
