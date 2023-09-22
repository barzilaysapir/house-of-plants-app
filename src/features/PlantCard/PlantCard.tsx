import { FC } from "react";
import { Plant } from "shared/types/Plants";
import PlantCardContent from "./PlantCardContent/PlantCardContent";
import PlantCardImage from "./PlantCardImage";
import StyledPlantCard from "./PlantCard.style";

type PlantCardProps = {
    plant: Plant;
    horizontal?: boolean;
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const {
        plant,
        plant: { default_image },
        horizontal = false,
    } = props;

    return (
        <StyledPlantCard
            // elevation={1}
            sx={{
                padding: 1,
                borderRadius: 3,
            }}
            horizontal={Number(horizontal)}
        >
            <PlantCardImage image={default_image.thumbnail} />
            <PlantCardContent plant={plant} />
        </StyledPlantCard>
    );
};

export default PlantCard;
