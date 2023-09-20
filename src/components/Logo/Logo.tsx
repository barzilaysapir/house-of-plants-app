import { ReactComponent as LeafIcon } from 'assets/icons/leaf.svg';
import SvgIcon from '@mui/icons-material/QrCodeScanner';
import { StyledLogoTypo } from './Logo.style';
import { Box } from '@mui/material';

const Logo = () => {

    return (
        <Box sx={{
            mr: 2,
            display: 'flex',
            flexGrow: 1,
            columnGap: 1,
        }}>
            <StyledLogoTypo
                noWrap
                component="a"
                href="/"
            >
                HousePlantCare
            </StyledLogoTypo>

            <SvgIcon component={LeafIcon} viewBox="2000 500 1 5500" />
        </Box>
    );
}

export default Logo;
