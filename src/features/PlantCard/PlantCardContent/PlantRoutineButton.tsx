import { IconButton, Tooltip } from "@mui/material";
import { FC } from "react";
import { PlantRoutine } from "../PlantCard.util";
import { PlantCareRoutineData } from "shared/types/Plants";
import PlantRoutineProgress from "./PlantRoutineProgress";
import i18n from "i18next";
import PlantRoutineDialog from "features/PlantRoutineDialog/PlantRoutineDialog";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import usePlantCardContent from "./usePlantCardContent";

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
    const { handleClick, loadingBtn } = usePlantCardContent({ handleClose });

    if (care.freq === 0) return null;

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
