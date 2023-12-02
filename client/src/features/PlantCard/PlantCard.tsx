import { FC, ReactNode } from "react";
import { Plant } from "shared/types/plants";
import { CardData, CardImageSize } from "shared/types/card";
import Card from "components/Card/Card";

type PlantCardProps = {
    plant: Plant;
    size?: CardImageSize;
    vertical?: boolean;
    children?: ReactNode;
    onClick?: (data: CardData & any) => void;
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const {
        plant: { primaryName, secondaryName, image },
        size = CardImageSize.MEDIUM,
        vertical = false,
        children,
        onClick = () => null,
    } = props;

    return (
        <Card
            data={{ name: primaryName, description: secondaryName, image }}
            size={size}
            onClick={onClick}
            vertical={vertical}
        >
            {children}
        </Card>
    );
};

export default PlantCard;
