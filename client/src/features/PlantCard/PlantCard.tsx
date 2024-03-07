import { FC } from "react";
import { Plant } from "shared/types/Plants";
import PlantCardContent from "./PlantCardContent/PlantCardContent";
import PlantCardImage from "./PlantCardImage";
import StyledPlantCard from "./PlantCard.style";

type PlantCardProps = {
    plant: Plant;
    horizontal?: boolean;
    withRoutines?: boolean;
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const { plant, horizontal = false, withRoutines = false } = props;

    return (
        <StyledPlantCard
            // elevation={1}
            sx={{
                padding: 1,
                borderRadius: 3,
            }}
            horizontal={Number(horizontal)}
        >
            <PlantCardImage image={plant.image} />
            <PlantCardContent plant={plant} withRoutines={withRoutines} />
        </StyledPlantCard>
    );
};

export default PlantCard;
