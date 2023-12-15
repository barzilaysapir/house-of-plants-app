import { useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { Route } from "shared/types/route";
import { Logout, Settings } from "@mui/icons-material";
import { MenuOption } from "shared/types/UI";

export const PAGES = ["Products", "Pricing", "Blog"];
export const SETTINGS: MenuOption[] = [
    {
        name: "My Account",
        link: "/account",
    },
    {
        name: "Settings",
        link: "/settings",
        icon: <Settings fontSize="small" />,
    },
    {
        name: "Logout",
        link: "/",
        icon: <Logout fontSize="small" />,
    },
];

const useTopNav = () => {
    const navigate = useNavigate();

    const [anchorElPages, setAnchorElPages] = useState<HTMLElement | null>(
        null
    );
    const [anchorElSettings, setAnchorElSettings] =
        useState<HTMLElement | null>(null);

    const handleOpenPagesMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElPages(event.currentTarget);
    };

    const handleClosePagesMenu = () => {
        setAnchorElPages(null);
    };

    const handlePagesMenuItemClick = (menuItem?: string) => {
        console.log(menuItem);
        handleClosePagesMenu();
    };

    const handleOpenSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElSettings(event.currentTarget);
    };

    const handleCloseSettingsMenu = () => {
        setAnchorElSettings(null);
    };

    const handleSettingsMenuItemClick = (menuItem: string) => {
        switch (menuItem) {
            case "Logout":
                localStorage.removeItem("user");
                googleLogout();
                navigate(Route.SIGN_IN);
                break;
            default:
                break;
        }
        handleCloseSettingsMenu();
    };

    return {
        anchorElPages,
        handleOpenPagesMenu,
        handleClosePagesMenu,
        handlePagesMenuItemClick,

        anchorElSettings,
        handleOpenSettingsMenu,
        handleCloseSettingsMenu,
        handleSettingsMenuItemClick,
    };
};

export default useTopNav;
