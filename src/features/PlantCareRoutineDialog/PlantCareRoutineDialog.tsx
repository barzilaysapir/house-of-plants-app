import { Button, Container } from "@mui/material";
import { FC } from "react";
import StyledPlantCareRoutineDialog from "./PlantCareRoutineDialog.style";
import Transition from "components/Transition/Transition";
import { PlantCareRoutine, PlantCareRoutineData } from "shared/types/Plants";
import RoutineData from "./RoutineData";
import RoutineHeader from "./RoutineHeader";
import i18n from "i18next";

type PlantCareRoutineDialogProps = {
    open: boolean;
    plantName: string;
    routineName?: PlantCareRoutine | null;
    routineData: PlantCareRoutineData;
    handleClose: () => void;
};

const PlantCareRoutineDialog: FC<PlantCareRoutineDialogProps> = (props) => {
    const { open, plantName, routineName, routineData, handleClose } = props;

    if (!routineName) return null;

    return (
        <StyledPlantCareRoutineDialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <RoutineHeader
                careRoutine={routineName}
                plantName={plantName}
                handleClose={handleClose}
            />

            <Container>
                <RoutineData routineData={routineData} />

                <Button variant="contained" fullWidth>
                    {i18n.t("completed")}
                </Button>
            </Container>
        </StyledPlantCareRoutineDialog>
    );
};

export default PlantCareRoutineDialog;
