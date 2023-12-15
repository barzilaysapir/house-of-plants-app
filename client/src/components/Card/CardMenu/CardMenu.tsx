import { FC, useState } from "react";
import {
    Box,
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuList,
} from "@mui/material";
import i18n from "config/locales/i18n";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MenuOption } from "shared/types/UI";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import { StyledMenuIconBtn } from "./CardMenu.style";

type CardMenuProps = {
    title: string;
    isGalleryView: boolean;
    options: MenuOption[];
};

const CardMenu: FC<CardMenuProps> = (props) => {
    const { title, isGalleryView, options } = props;

    const { isOpen, handleOpen, handleClose } = useToggleDisplay();

    const [anchorElSettings, setAnchorElSettings] =
        useState<HTMLElement | null>(null);

    const handleClosePagesMenu = () => {
        setAnchorElSettings(null);
        handleClose();
    };

    const menuList = (
        <MenuList dense>
            {options.map(({ name, icon }) => (
                <MenuItem key={name} onClick={handleClosePagesMenu}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                </MenuItem>
            ))}
        </MenuList>
    );

    return (
        <Box>
            <StyledMenuIconBtn
                aria-label={i18n.t("settings")}
                onClick={(e) => {
                    setAnchorElSettings(e.currentTarget);
                    handleOpen();
                }}
                isGalleryView={isGalleryView}
            >
                <MoreVertIcon />
            </StyledMenuIconBtn>

            <DesktopMenu
                anchorElSettings={anchorElSettings}
                handleClosePagesMenu={handleClosePagesMenu}
            >
                {menuList}
            </DesktopMenu>

            <MobileMenu
                isOpen={isOpen}
                handleClose={handleClosePagesMenu}
                title={title}
            >
                {menuList}
            </MobileMenu>
        </Box>
    );
};

export default CardMenu;
