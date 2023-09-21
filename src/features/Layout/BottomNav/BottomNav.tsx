import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import HomeIcon from "@mui/icons-material/Home";
import { ReactComponent as LeafIcon } from "assets/icons/leaf.svg";
import { useState } from "react";
import SvgIcon from "@mui/icons-material/QrCodeScanner";
import { useNavigate } from "react-router-dom";
import { StyledBottomNavWrapper } from "./BottomNav.style";
import { Trans } from "react-i18next";

const BOTTOM_NAV_LINKS = [
    {
        label: <Trans>home.title</Trans>,
        icon: <HomeIcon />,
        link: "/",
    },
    {
        label: <Trans>myPlants.title</Trans>,
        icon: <SvgIcon component={LeafIcon} viewBox="2000 500 1 5500" />,
        link: "/myPlants",
    },
    {
        label: <Trans>identify.title</Trans>,
        icon: <QrCodeScannerIcon />,
        link: "/identify",
    },
];

const BottomNav = () => {
    const [value, setValue] = useState(
        BOTTOM_NAV_LINKS.findIndex(
            ({ link }) =>
                link.split("/")[1] === window.location.pathname.split("/")[1]
        )
    );

    const navigate = useNavigate();

    const onLinkClicked = (link: string) => {
        navigate(link);
    };

    return (
        <StyledBottomNavWrapper>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, currentPage) => {
                    setValue(currentPage);
                }}
            >
                {BOTTOM_NAV_LINKS.map((navLink, index) => (
                    <BottomNavigationAction
                        key={index}
                        {...navLink}
                        onClick={() => onLinkClicked(navLink.link)}
                    />
                ))}
            </BottomNavigation>
        </StyledBottomNavWrapper>
    );
};

export default BottomNav;
