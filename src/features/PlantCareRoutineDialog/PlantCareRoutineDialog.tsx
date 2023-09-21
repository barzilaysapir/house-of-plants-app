import { Button } from "@mui/material";
import { FC } from "react";
import StyledPlantCareRoutineDialog from "./PlantCareRoutineDialog.style";
import Transition from "components/Transition/Transition";
import { PlantCareRoutine, PlantCareRoutineData } from "shared/types/Plants";
import RoutineData from "./RoutineData";
import RoutineHeader from "./RoutineHeader";
import { useTranslation } from "react-i18next";

type PlantCareRoutineDialogProps = {
    open: boolean;
    plantName: string;
    routineName?: PlantCareRoutine | null;
    routineData: PlantCareRoutineData;
    handleClose: () => void;
};

const PlantCareRoutineDialog: FC<PlantCareRoutineDialogProps> = (props) => {
    const { open, plantName, routineName, routineData, handleClose } = props;

    const { t } = useTranslation();
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

            <RoutineData routineData={routineData} />

            <Button
                color="primary"
                variant="contained"
                sx={{ alignSelf: "center" }}
            >
                {t("completed")}
            </Button>
        </StyledPlantCareRoutineDialog>
    );
};

export default PlantCareRoutineDialog;
