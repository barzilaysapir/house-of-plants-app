import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StyledBottomNavWrapper } from "./BottomNav.style";
import { BOTTOM_NAV_LINKS, getActiveNavlink } from "./BottomNav.util";
import Logo from "components/Logo";
import { useMediaQuery, useTheme } from "@mui/material";

const BottomNav = () => {
    const [activeNavlink, setActiveNavlink] = useState(getActiveNavlink);

    const theme = useTheme();
    const showLogo = useMediaQuery(theme.breakpoints.up("sm"));
    const navigate = useNavigate();

    const onLinkClicked = (link: string) => {
        navigate(link);
    };

    return (
        <StyledBottomNavWrapper elevation={3}>
            <BottomNavigation
                showLabels
                value={activeNavlink}
                onChange={(event, currentPage) => {
                    setActiveNavlink(currentPage);
                }}
            >
                {showLogo && <Logo />}
                {BOTTOM_NAV_LINKS.map((navLink, index) => (
                    <BottomNavigationAction
                        key={index}
                        {...navLink}
                        onClick={() => onLinkClicked(navLink.to)}
                    />
                ))}
            </BottomNavigation>
        </StyledBottomNavWrapper>
    );
};

export default BottomNav;
