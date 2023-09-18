import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import HomeIcon from '@mui/icons-material/Home';
import { ReactComponent as LeafIcon } from 'assets/icons/leaf.svg';
import { useState } from 'react';
import LOCALE from 'shared/locale/Locale';
import SvgIcon from '@mui/icons-material/QrCodeScanner';
import { useNavigate } from 'react-router-dom';
import { StyledBottomNavWrapper } from './style';

const BOTTOM_NAV_LINKS = [
    {
        label: LOCALE.home.title,
        icon: <HomeIcon />,
        link: "/"
    },
    {
        label: LOCALE.myPlants.title,
        icon: <SvgIcon component={LeafIcon} viewBox="2000 500 1 5500" />,
        link: "/myPlants"
    },
    {
        label: LOCALE.identify.title,
        icon: <QrCodeScannerIcon />,
        link: "/identify"
    }
];

const BottomNav = () => {
    const [value, setValue] = useState(0);
    let navigate = useNavigate();

    const onLinkClicked = (link: string) => {
        navigate(link)
    }

    return (
        <StyledBottomNavWrapper>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, currentPage) => {
                    setValue(currentPage);
                }}
            >
                {BOTTOM_NAV_LINKS.map((navLink, index) =>
                    <BottomNavigationAction key={index} {...navLink} onClick={() => onLinkClicked(navLink.link)} />
                )}
            </BottomNavigation>
        </StyledBottomNavWrapper>
    );
}

export default BottomNav;
