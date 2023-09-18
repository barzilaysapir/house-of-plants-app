import { Box, Typography } from '@mui/material';
import { ReactComponent as LeafIcon } from 'assets/icons/leaf.svg';
import SvgIcon from '@mui/icons-material/QrCodeScanner';

const Logo = () => {

    return (
        <Box sx={{
            mr: 2,
            display: 'flex',
            columnGap: 1,
            flexGrow: 1,
        }}>
            <Typography
                noWrap
                component="a"
                href="/"
                sx={{
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                HousePlantCare
            </Typography>
            {/* <SvgIcon component={LeafIcon} viewBox="2000 500 1 5500" /> */}
        </Box>
    );
}

export default Logo;
