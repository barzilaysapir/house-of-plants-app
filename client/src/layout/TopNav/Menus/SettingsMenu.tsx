import {
  Badge,
  Divider,
  IconButton,
  ListItemAvatar,
  ListItemIcon,
  Menu,
  MenuItem,
  Tooltip,
} from '@mui/material'
import useTopNav, { SETTINGS } from '../useTopNav'
import { FC } from 'react'
import useLocalStorage from 'shared/hooks/useLocalStorage'
import UserAvatar from 'components/UserAvatar'

type SettingsMenuProps = {}

const SettingsMenu: FC<SettingsMenuProps> = () => {
  const { user } = useLocalStorage()

  const { picture } = JSON.parse(user as string) || {}

  const {
    anchorElSettings,
    handleOpenSettingsMenu,
    handleCloseSettingsMenu,
    handleSettingsMenuItemClick,
  } = useTopNav()

  return (
    <Badge
      color="info"
      variant="dot"
      invisible={false}
      overlap="circular"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
    >
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenSettingsMenu} sx={{ p: 0 }}>
          <UserAvatar picture={picture} />
        </IconButton>
      </Tooltip>

      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElSettings}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElSettings)}
        onClose={handleCloseSettingsMenu}
      >
        <MenuItem onClick={() => handleSettingsMenuItemClick(SETTINGS[0].name)}>
          <ListItemAvatar>
            <UserAvatar picture={picture} />
          </ListItemAvatar>
          {SETTINGS[0].name}
        </MenuItem>

        <Divider sx={{ margin: 0 }} />

        {SETTINGS.slice(1).map((setting) => (
          <MenuItem
            key={setting.name}
            onClick={() => handleSettingsMenuItemClick(setting.name)}
          >
            <ListItemIcon>{setting.icon}</ListItemIcon>
            {setting.name}
          </MenuItem>
        ))}
      </Menu>
    </Badge>
  )
}

export default SettingsMenu
