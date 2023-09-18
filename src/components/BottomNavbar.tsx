import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import { ReactComponent as LeafIcon } from 'assets/icons/leaf.svg';
import { useState } from 'react';
import LOCALE from 'shared/utils/Locale';
import SvgIcon from '@mui/icons-material/QrCodeScanner';
import Logo from './Logo';

const BottomNavbar = () => {
    const [value, setValue] = useState(0);

    return (
        <Box sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, currentPage) => {
                    setValue(currentPage);
                }}
            >
                {/* <Logo /> */}
                <BottomNavigationAction label={LOCALE.home.title} icon={<HomeIcon />} />
                <BottomNavigationAction label={LOCALE.myPlants.title} icon={
                    <SvgIcon component={LeafIcon} viewBox="2000 500 1 5500" />
                } />
                <BottomNavigationAction label={LOCALE.identify.title} icon={<QrCodeScannerIcon />} />
            </BottomNavigation>
        </Box>
    );
}

export default BottomNavbar;
