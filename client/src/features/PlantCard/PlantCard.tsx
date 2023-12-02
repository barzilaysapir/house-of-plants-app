import { FC, MouseEventHandler, ReactNode } from "react";
import { Plant } from "shared/types/plants";
import { CardImageSize } from "shared/types/card";
import Card from "components/Card/Card";

type PlantCardProps = {
    plant: Plant;
    size?: CardImageSize;
    vertical?: boolean;
    children?: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const {
        plant: { primaryName, secondaryName, image },
        size = CardImageSize.MEDIUM,
        vertical = false,
        children,
        onClick,
    } = props;

    return (
        <Card
            data={{ name: primaryName, description: secondaryName, image }}
            size={size}
            onClick={onClick}
            vertical={vertical}
            noWrap
        >
            {children}
        </Card>
    );
};

export default PlantCard;
