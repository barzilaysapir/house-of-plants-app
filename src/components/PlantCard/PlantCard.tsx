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
        care,
        ...cardContentProps
    } = props;

    const [open, setOpen] = useState<boolean>(false);
    const [routineName, setRoutineName] = useState<PlantCareRoutine | null>();

    const handleClickOpen = (routineName: PlantCareRoutine) => {
        setOpen(true);
        setRoutineName(routineName);
    };

    const handleClose = () => {
        setOpen(false);
        setRoutineName(null);
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
                care={care}
                {...cardContentProps}
            />
            <PlantCareRoutineDialog
                open={open}
                plantName={primary_name}
                routineName={routineName}
                routineData={care[routineName as PlantCareRoutine]}
                handleClose={handleClose}
            />
        </StyledPlantCard>
    );
};

export default PlantCard;
