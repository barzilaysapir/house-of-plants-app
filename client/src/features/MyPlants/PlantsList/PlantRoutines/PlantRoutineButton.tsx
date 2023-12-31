import { IconButton, Tooltip } from "@mui/material";
import { FC } from "react";
import { PlantRoutine } from "features/PlantCard/PlantCard.util";
import { PlantCareRoutineData } from "shared/types/plants";
import PlantRoutineProgress from "./PlantRoutineProgress";
import i18n from "i18next";
import PlantRoutineDialog from "./PlantRoutineDialog/PlantRoutineDialog";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import usePlantRoutineButton from "./usePlantRoutineButton";

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
    const { handleClick, loadingBtn } = usePlantRoutineButton({ handleClose });

    if (care.freq === 0) return null;

    return (
        <Tooltip title={i18n.t(label)}>
            <>
                <IconButton
                    aria-label={i18n.t(label)}
                    color={care.next === 0 ? "secondary" : color}
                    onClick={handleOpen}
                >
                    <RoutineIcon />
                    <PlantRoutineProgress freq={care.freq} next={care.next} />
                </IconButton>

                <PlantRoutineDialog
                    isOpen={isOpen}
                    plantName={name}
                    routineName={id}
                    routineData={care}
                    handleClose={handleClose}
                    handleClick={handleClick}
                    loadingBtnName={loadingBtn}
                />
            </>
        </Tooltip>
    );
};

export default PlantRoutineButton;
