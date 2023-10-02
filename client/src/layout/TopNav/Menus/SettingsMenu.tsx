import {
    Avatar,
    Badge,
    IconButton,
    Menu,
    MenuItem,
    Tooltip,
    Typography,
} from "@mui/material";
import useTopNav, { SETTINGS } from "../useTopNav";
import { green } from "@mui/material/colors";
import { FC, useEffect } from "react";
import i18n from "i18next";
import { useNavigate } from "react-router";

type SettingsMenuProps = {};

const SettingsMenu: FC<SettingsMenuProps> = (props) => {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    const { initials, image } = JSON.parse(user as string) || {};

    const {
        anchorElSettings,
        handleOpenSettingsMenu,
        handleCloseSettingsMenu,
        handleSettingsMenuItemClick,
    } = useTopNav();

    useEffect(() => {
        // if (!user) navigate("/");
    }, [user]);

    return (
        <Badge
            color="info"
            variant="dot"
            invisible={false}
            overlap="circular"
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
            }}
        >
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenSettingsMenu} sx={{ p: 0 }}>
                    <Avatar
                        sx={{ bgcolor: green[500] }}
                        alt={i18n.t("userHeader.avatarAlt")}
                        src={image}
                    >
                        {initials}
                    </Avatar>
                </IconButton>
            </Tooltip>

            <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElSettings}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                open={Boolean(anchorElSettings)}
                onClose={handleCloseSettingsMenu}
            >
                {SETTINGS.map((setting) => (
                    <MenuItem
                        key={setting}
                        onClick={() => handleSettingsMenuItemClick(setting)}
                    >
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Badge>
    );
};

export default SettingsMenu;
