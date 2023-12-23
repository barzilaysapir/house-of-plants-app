import { FC } from "react";
import { Box, SvgIconTypeMap } from "@mui/material";
import i18n from "config/locales/i18n";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MenuOption } from "shared/types/UI";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { StyledMenuIconBtn } from "./CardMenu.style";
import CardMenuList from "./CardMenuList";
import useCardMenu from "./useCardMenu";
import { OverridableComponent } from "@mui/types";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

type CardMenuProps = {
    header: {
        Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
        title: string;
    };
    isGalleryView: boolean;
    options: MenuOption[];
};

const CardMenu: FC<CardMenuProps> = (props) => {
    const { header, isGalleryView, options } = props;

    const {
        onOpenClick,
        handleCloseDesktop,
        handleCloseMobile,
        isOpenMobile,
        desktopAnchor,
    } = useCardMenu();

    return (
        <Box borderRadius="inherit">
            <StyledMenuIconBtn
                aria-label={i18n.t("settings")}
                onClick={onOpenClick}
                isGalleryView={isGalleryView}
            >
                <ChevronLeftIcon
                    sx={{
                        display: { xs: "block", md: "none" },
                    }}
                />
                <MoreVertIcon
                    sx={{
                        display: { xs: "none", md: "block" },
                    }}
                />
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
                header={header}
            >
                <CardMenuList options={options} />
            </MobileMenu>
        </Box>
    );
};

export default CardMenu;
