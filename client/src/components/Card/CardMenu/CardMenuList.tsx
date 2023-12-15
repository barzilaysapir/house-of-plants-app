import { FC } from "react";
import {
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuItemProps,
    MenuList,
} from "@mui/material";
import { MenuOption } from "shared/types/UI";

type CardMenuListProps = MenuItemProps & {
    options: MenuOption[];
};

const CardMenuList: FC<CardMenuListProps> = (props) => {
    const { options, ...menuItemProps } = props;

    return (
        <MenuList>
            {options.map(({ name, icon }) => (
                <MenuItem key={name} {...menuItemProps}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                </MenuItem>
            ))}
        </MenuList>
    );
};

export default CardMenuList;
