import { FC, MouseEventHandler, PropsWithChildren } from "react";
import { Plant } from "shared/types/plants";
import { CardImageSize } from "shared/types/card";
import Card from "components/Card";
import i18n from "i18next";
import { MENU_OPTIONS } from "./PlantCard.util";

type PlantCardProps = PropsWithChildren & {
    plant: Plant;
    size?: CardImageSize;
    vertical?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const {
        plant: { id, primaryName, site, image },
        size = CardImageSize.MEDIUM,
        vertical = false,
        children,
        onClick,
    } = props;

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
            menuOptions={MENU_OPTIONS}
            noWrap
        >
            {children}
        </Card>
    );
};

export default PlantCard;
