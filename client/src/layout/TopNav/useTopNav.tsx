import { useState } from "react";
import { googleLogout } from "@react-oauth/google";

export const PAGES = ["Products", "Pricing", "Blog"];
export const SETTINGS = ["Profile", "Account", "Dashboard", "Logout"];

const useTopNav = () => {
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
