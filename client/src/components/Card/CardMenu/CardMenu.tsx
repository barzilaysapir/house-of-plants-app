import { FC } from "react";
import { Box, SvgIconTypeMap } from "@mui/material";
import i18n from "config/locales/i18n";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MenuOption } from "shared/types/UI";
import CardMenuDesktop from "./CardMenuDesktop";
import CardMenuMobile from "./CardMenuMobile";
import { StyledCardMenuOpenBtn } from "./CardMenu.style";
import CardMenuList from "./CardMenuList";
import useCardMenu from "./useCardMenu";
import { OverridableComponent } from "@mui/types";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

type CardMenuProps = {
    id?: string;
    header: {
        Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
        title: string;
    };
    isGalleryView: boolean;
    options: MenuOption[];
};

const CardMenu: FC<CardMenuProps> = (props) => {
    const { id, header, isGalleryView, options } = props;

    const {
        onOpenClick,
        handleCloseDesktop,
        handleCloseMobile,
        isOpenMobile,
        desktopAnchor,
    } = useCardMenu();

    return (
        <Box borderRadius="inherit">
            <StyledCardMenuOpenBtn
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
            </StyledCardMenuOpenBtn>

            <CardMenuDesktop
                anchorElSettings={desktopAnchor}
                handleClosePagesMenu={handleCloseDesktop}
            >
                <CardMenuList id={id} options={options} />
            </CardMenuDesktop>

            <CardMenuMobile
                isOpen={isOpenMobile}
                handleClose={handleCloseMobile}
                header={header}
            >
                <CardMenuList id={id} options={options} />
            </CardMenuMobile>
        </Box>
    );
};

export default CardMenu;
