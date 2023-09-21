import { IconButton, Tooltip } from "@mui/material";
import { FC } from "react";
import { CardCareRoutine } from "../PlantCard.util";
import { PlantCareRoutineData, PlantCareRoutine } from "shared/types/Plants";
import PlantCareRoutineProgress from "./PlantCareRoutineProgress";
import { useTranslation } from "react-i18next";

type PlantCareRoutineButtonProps = {
    cardCareRoutine: CardCareRoutine;
    routineData: PlantCareRoutineData;
    handleCareRoutineClick: (
        routineId: PlantCareRoutine,
        routineData: PlantCareRoutineData
    ) => void;
};

const PlantCareRoutineButton: FC<PlantCareRoutineButtonProps> = (props) => {
    const {
        cardCareRoutine,
        cardCareRoutine: { Icon },
        routineData,
        handleCareRoutineClick,
    } = props;

    const { t } = useTranslation();

    if (routineData.freq === -1) return null;

    return (
        <Tooltip title={t(cardCareRoutine.label)}>
            <IconButton
                aria-label={t(cardCareRoutine.label)}
                color={routineData.next === 0 ? "error" : cardCareRoutine.color}
                onClick={() =>
                    handleCareRoutineClick(cardCareRoutine.id, routineData)
                }
            >
                <Icon />
                <PlantCareRoutineProgress
                    freq={routineData.freq}
                    next={routineData.next}
                />
            </IconButton>
        </Tooltip>
    );
};

export default PlantCareRoutineButton;
