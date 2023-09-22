import { IconButton, Tooltip } from "@mui/material";
import { FC } from "react";
import { PlantRoutine } from "../PlantCard.util";
import { PlantCareRoutineData } from "shared/types/Plants";
import PlantRoutineProgress from "./PlantRoutineProgress";
import i18n from "i18next";
import PlantRoutineDialog from "features/PlantRoutineDialog/PlantRoutineDialog";
import useToggleDisplay from "shared/hooks/useToggleDisplay";

type PlantRoutineButtonProps = {
    name: string;
    routine: PlantRoutine;
    care: PlantCareRoutineData;
};

const PlantRoutineButton: FC<PlantRoutineButtonProps> = (props) => {
    const {
        name,
        routine: { id, label, color, Icon: RoutineIcon },
        care,
    } = props;

    const { isOpen, handleOpen, handleClose } = useToggleDisplay();

    const handleRoutineComplete = () => {
        // fetch routine complete
        handleClose();
    };

    if (care.freq === -1) return null;

    return (
        <Tooltip title={i18n.t(label)}>
            <>
                <IconButton
                    aria-label={i18n.t(label)}
                    color={care.next === 0 ? "error" : color}
                    onClick={handleOpen}
                >
                    <RoutineIcon />
                    <PlantRoutineProgress freq={care.freq} next={care.next} />
                </IconButton>

                <PlantRoutineDialog
                    open={isOpen}
                    plantName={name}
                    routineName={id}
                    routineData={care}
                    handleClose={handleClose}
                    handleComplete={handleRoutineComplete}
                />
            </>
        </Tooltip>
    );
};

export default PlantRoutineButton;
