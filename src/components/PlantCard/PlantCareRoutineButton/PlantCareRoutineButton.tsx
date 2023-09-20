import { IconButton, Tooltip } from "@mui/material";
import { FC } from "react";
import { CardCareRoutine } from "../PlantCard.util";
import { PlantCareRoutineInfo, PlantCareRoutine } from "shared/types/Plants";
import PlantCareRoutineProgress from "./PlantCareRoutineProgress";

type PlantCareRoutineButtonProps = CardCareRoutine &
    PlantCareRoutineInfo & {
        handleCareRoutineClick: (routine: PlantCareRoutine) => void;
    };

const PlantCareRoutineButton: FC<PlantCareRoutineButtonProps> = (props) => {
    const { id, label, color, Icon, freq, next, handleCareRoutineClick } =
        props;

    if (freq === -1) return null;

    return (
        <Tooltip title={label} enterTouchDelay={0}>
            <IconButton
                aria-label={label}
                color={next === 0 ? "error" : color}
                onClick={() => handleCareRoutineClick(id)}
            >
                <Icon />
                <PlantCareRoutineProgress freq={freq} next={next} />
            </IconButton>
        </Tooltip>
    );
};

export default PlantCareRoutineButton;
