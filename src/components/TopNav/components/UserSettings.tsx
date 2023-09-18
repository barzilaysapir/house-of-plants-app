import { Avatar, Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import useTopNav from '../useTopNav';
import LOCALE from 'shared/utils/Locale';
import { green } from '@mui/material/colors';
import { User } from 'shared/types/User';
import { FC } from 'react';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

type UserSettingsProps = User;

const UserSettings: FC<UserSettingsProps> = (props) => {
    const { initials, image } = props;

    const {
        anchorElUser,
        handleOpenUserMenu,
        handleCloseUserMenu,
    } = useTopNav();

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                        sx={{ bgcolor: green[500] }}
                        alt={LOCALE.userHeader.avatarAlt}
                        src={image}
                    >
                        {initials}
                    </Avatar>
                </IconButton>
            </Tooltip>

            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}

export default UserSettings;
