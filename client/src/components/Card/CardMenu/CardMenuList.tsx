import { FC } from "react";
import {
    ListItemIcon,
    ListItemText,
    MenuItem,
    MenuItemProps,
    MenuList,
} from "@mui/material";
import { MenuOption } from "shared/types/UI";
import { Link } from "react-router-dom";

type CardMenuListProps = MenuItemProps & {
    id?: string;
    options: MenuOption[];
};

const CardMenuList: FC<CardMenuListProps> = (props) => {
    const { id, options, ...menuItemProps } = props;

    return (
        <MenuList>
            {options.map(({ name, icon, to }) => {
                const props =
                    to && id ? { component: Link, to: `./${id}${to}` } : {};

                return (
                    <MenuItem key={name} {...props} {...menuItemProps}>
                        <ListItemIcon>{icon}</ListItemIcon>
                        <ListItemText primary={name} />
                    </MenuItem>
                );
            })}
        </MenuList>
    );
};

export default CardMenuList;
