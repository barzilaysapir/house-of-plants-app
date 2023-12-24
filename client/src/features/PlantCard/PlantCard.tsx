import React, { FC, MouseEventHandler, PropsWithChildren } from "react";
import { Plant } from "shared/types/plants";
import { CardImageSize } from "shared/types/card";
import Card from "components/Card";
import i18n from "i18next";
import { MenuOption } from "shared/types/UI";
import YardOutlinedIcon from "@mui/icons-material/YardOutlined";

type PlantCardProps = PropsWithChildren & {
    plant: Plant;
    size?: CardImageSize;
    vertical?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    menuOptions?: MenuOption[];
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const {
        plant: { id, primaryName, site, image },
        size = CardImageSize.MEDIUM,
        vertical = false,
        children,
        onClick,
        menuOptions,
    } = props;

    const menuProps = menuOptions
        ? {
              options: menuOptions,
              Icon: YardOutlinedIcon,
          }
        : undefined;

    return (
        <Card
            data={{
                id: id.toString(), // not unique. change to _id
                name: primaryName,
                description: site || i18n.t("unassigned"),
                image,
            }}
            size={size}
            onClick={onClick}
            vertical={vertical}
            menu={menuProps}
            noWrap
        >
            {children}
        </Card>
    );
};

export default PlantCard;
