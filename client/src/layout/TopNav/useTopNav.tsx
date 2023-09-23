import { useState } from "react";

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

    const handleOpenSettingsMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElSettings(event.currentTarget);
    };

    const handleCloseSettingsMenu = () => {
        setAnchorElSettings(null);
    };

    return {
        anchorElPages,
        handleOpenPagesMenu,
        handleClosePagesMenu,

        anchorElSettings,
        handleOpenSettingsMenu,
        handleCloseSettingsMenu,
    };
};

export default useTopNav;
