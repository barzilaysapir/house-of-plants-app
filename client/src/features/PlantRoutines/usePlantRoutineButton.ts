import { RoutineAction } from "features/PlantRoutines/PlantRoutineDialog/PlantRoutineDialog.util";
import { useState } from "react";

type UsePlantRoutineButtonProps = {
    handleClose: () => void;
};

const usePlantRoutineButton = ({ handleClose }: UsePlantRoutineButtonProps) => {
    const [loadingBtn, setLoadingBtn] = useState<RoutineAction | null>(null);

    const completeRoutine = async () => {
        // TODO: replace mock with actual API call
        try {
            await new Promise((resolve) => {
                setTimeout(resolve, 1000);
            });
            handleClose();
        } catch (error) {
            console.error(error);
        }
        setLoadingBtn(null);
    };

    const snoozeRoutine = async () => {
        // TODO: replace mock with actual API call
        try {
            await new Promise((resolve) => {
                setTimeout(resolve, 1000);
            });
            handleClose();
        } catch (error) {
            console.error(error);
        }
        setLoadingBtn(null);
    };

    const handleClick = async (clickedButton: RoutineAction) => {
        setLoadingBtn(clickedButton);
        switch (clickedButton) {
            case RoutineAction.COMPLETE:
                await completeRoutine();
                break;
            case RoutineAction.SNOOZE:
                await snoozeRoutine();
                break;
            default:
                break;
        }
    };

    return {
        handleClick,
        loadingBtn,
    };
};

export default usePlantRoutineButton;
