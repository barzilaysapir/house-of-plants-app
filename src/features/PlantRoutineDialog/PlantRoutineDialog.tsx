import { Button, Container } from "@mui/material";
import { FC } from "react";
import StyledPlantRoutineDialog from "./PlantRoutineDialog.style";
import SlideUpTransition from "components/Transition/SlideUpTransition";
import { PlantCareRoutine, PlantCareRoutineData } from "shared/types/Plants";
import RoutineData from "./RoutineData";
import RoutineHeader from "./RoutineHeader";
import i18n from "i18next";

type PlantRoutineDialogProps = {
    open: boolean;
    plantName: string;
    routineName: PlantCareRoutine;
    routineData: PlantCareRoutineData;
    handleClose: () => void;
    handleComplete: () => void;
};

const PlantRoutineDialog: FC<PlantRoutineDialogProps> = (props) => {
    const {
        open,
        plantName,
        routineName,
        routineData,
        handleClose,
        handleComplete,
    } = props;

    return (
        <StyledPlantRoutineDialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={SlideUpTransition}
        >
            <RoutineHeader
                careRoutine={routineName}
                plantName={plantName}
                handleClose={handleClose}
            />

            <Container>
                <RoutineData routineData={routineData} />

                <Button variant="contained" onClick={handleComplete} fullWidth>
                    {i18n.t("completed")}
                </Button>
            </Container>
        </StyledPlantRoutineDialog>
    );
};

export default PlantRoutineDialog;
