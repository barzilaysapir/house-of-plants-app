import { useState } from "react";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";

export const PAGES = ["Products", "Pricing", "Blog"];
export const SETTINGS = ["Profile", "Account", "Dashboard", "Logout"];

const useTopNav = () => {
    const [anchorElPages, setAnchorElPages] = useState<HTMLElement | null>(
        null
    );
    const [anchorElSettings, setAnchorElSettings] =
        useState<HTMLElement | null>(null);

    const navigate = useNavigate();

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
                gapi.auth2
                    .getAuthInstance()
                    .signOut()
                    .then(() => {
                        navigate("/signin");
                        console.log("User signed out.");
                    });
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
