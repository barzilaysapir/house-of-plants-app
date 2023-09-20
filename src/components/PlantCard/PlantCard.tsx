import { FC, useState } from "react";
import { Plant } from "shared/types/Plants";
import PlantCardContent from "./PlantCardContent";
import PlantCardImage from "./PlantCardImage";
import StyledPlantCard from "./PlantCard.style";

type PlantCardProps = Plant & {
    horizontal?: boolean;
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const {
        horizontal = false,
        primary_name,
        scientific_name,
        default_image,
        water_freq,
        water_next,
    } = props;

    const [open, setOpen] = useState<boolean>(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <StyledPlantCard
            sx={{
                padding: 1,
                borderRadius: 3,
            }}
            horizontal={+horizontal}
        >
            <PlantCardImage image={default_image.thumbnail} />
            <PlantCardContent
                title={primary_name}
                subtitle={scientific_name[0]}
                water_freq={water_freq}
                water_next={water_next}
            />
        </StyledPlantCard>
    );
};

export default PlantCard;
