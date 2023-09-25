import { Container, Dialog, Stack } from "@mui/material";
import { FC } from "react";
import SlideUpTransition from "components/Transition/SlideUpTransition";
import { PlantCareRoutine, PlantCareRoutineData } from "shared/types/Plants";
import RoutineData from "./RoutineData";
import RoutineActionButton from "./RoutineActionButton";
import {
    ROUTINE_ACTION_BUTTONS,
    RoutineAction,
} from "./PlantRoutineDialog.util";
import RoutineHeader from "./RoutineHeader";

type PlantRoutineDialogProps = {
    isOpen: boolean;
    plantName: string;
    routineName: PlantCareRoutine;
    routineData: PlantCareRoutineData;
    handleClose: () => void;
    handleClick: (clickedButton: RoutineAction) => Promise<void>;
    loadingBtnName: RoutineAction | null;
};

const PlantRoutineDialog: FC<PlantRoutineDialogProps> = (props) => {
    const {
        isOpen,
        plantName,
        routineName,
        routineData,
        handleClose,
        handleClick,
        loadingBtnName,
    } = props;

    return (
        <Dialog
            fullScreen
            open={isOpen}
            onClose={handleClose}
            TransitionComponent={SlideUpTransition}
        >
            <RoutineHeader
                plantName={plantName}
                routineName={routineName}
                handleClose={handleClose}
            />

            <Container>
                <RoutineData routineData={routineData} />
                <Stack spacing={1}>
                    {ROUTINE_ACTION_BUTTONS.map((buttonProps) => (
                        <RoutineActionButton
                            key={buttonProps.label}
                            handleClick={handleClick}
                            loadingBtnName={loadingBtnName}
                            count={routineData.next}
                            {...buttonProps}
                        />
                    ))}
                </Stack>
            </Container>
        </Dialog>
    );
};

export default PlantRoutineDialog;
