import { FC, PropsWithChildren } from "react";
import { Menu, PopoverProps } from "@mui/material";

type DesktopMenuProps = PropsWithChildren & {
    anchorElSettings: PopoverProps["anchorEl"];
    handleClosePagesMenu: () => void;
};

const DesktopMenu: FC<DesktopMenuProps> = (props) => {
    const { children, anchorElSettings, handleClosePagesMenu } = props;

    return (
        <Menu
            id="menu-appbar"
            anchorEl={anchorElSettings}
            anchorOrigin={{
                vertical: "top",
                horizontal: "left",
            }}
            transformOrigin={{
                vertical: "top",
                horizontal: "right",
            }}
            open={Boolean(anchorElSettings)}
            onClose={handleClosePagesMenu}
            sx={{
                display: { xs: "none", md: "block" },
            }}
            keepMounted
        >
            {children}
        </Menu>
    );
};

export default DesktopMenu;
