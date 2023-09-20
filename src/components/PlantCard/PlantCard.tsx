import { FC, useState } from "react";
import { Plant, PlantCareRoutine } from "shared/types/Plants";
import PlantCardContent from "./PlantCardContent";
import PlantCardImage from "./PlantCardImage";
import StyledPlantCard from "./PlantCard.style";
import PlantCareRoutineDialog from "features/PlantCareRoutineDialog/PlantCareRoutineDialog";

type PlantCardProps = Plant & {
    horizontal?: boolean;
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const {
        horizontal = false,
        id,
        primary_name,
        scientific_name,
        default_image,
        ...cardContentProps
    } = props;

    const [open, setOpen] = useState<boolean>(false);
    const [careRoutine, setCareRoutine] = useState<PlantCareRoutine | null>();

    const handleClickOpen = (careRoutine: PlantCareRoutine) => {
        setOpen(true);
        setCareRoutine(careRoutine);
    };

    const handleClose = () => {
        setOpen(false);
        setCareRoutine(null);
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
                handleCareRoutineClick={handleClickOpen}
                {...cardContentProps}
            />
            <PlantCareRoutineDialog
                open={open}
                careRoutine={careRoutine}
                handleClose={handleClose}
            />
        </StyledPlantCard>
    );
};

export default PlantCard;
