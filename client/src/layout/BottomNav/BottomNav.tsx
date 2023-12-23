import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Link, useLocation } from "react-router-dom";
import { StyledBottomNavWrapper } from "./BottomNav.style";
import { BOTTOM_NAV_LINKS } from "./BottomNav.util";
import Logo from "components/Logo";
import useActiveDevice from "shared/hooks/useActiveDevice";

const BottomNav = () => {
    const { isMobile } = useActiveDevice();
    const { pathname } = useLocation();

    const currentPath = "/" + pathname.split("/")[1];

    return (
        <StyledBottomNavWrapper elevation={3}>
            <BottomNavigation value={currentPath} showLabels>
                {!isMobile && <Logo />}
                {BOTTOM_NAV_LINKS.map((navLink, index) => (
                    <BottomNavigationAction
                        key={index}
                        value={navLink.to}
                        component={Link}
                        {...navLink}
                    />
                ))}
            </BottomNavigation>
        </StyledBottomNavWrapper>
    );
};

export default BottomNav;
