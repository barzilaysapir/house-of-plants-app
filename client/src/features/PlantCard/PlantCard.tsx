import { FC, ReactNode } from "react";
import { Plant } from "shared/types/Plants";
import PlantCardContent from "./PlantCardContent/PlantCardContent";
import PlantCardImage from "./PlantCardImage";
import StyledPlantCard from "./PlantCard.style";
import { CardImageSize } from "./PlantCard.util";

type PlantCardProps = {
    plant: Plant;
    size?: CardImageSize;
    vertical?: boolean;
    children?: ReactNode;
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const { plant, size = "medium", vertical = false, children } = props;

    return (
        <StyledPlantCard
            elevation={1}
            sx={{
                padding: 1,
                borderRadius: 3,
            }}
            vertical={Number(vertical)}
        >
            <PlantCardImage image={plant.image} size={size} />
            <PlantCardContent plant={plant}>{children}</PlantCardContent>
        </StyledPlantCard>
    );
};

export default PlantCard;
