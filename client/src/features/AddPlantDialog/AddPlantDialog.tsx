import { FC } from "react";
import SlideUpTransition from "components/SlideUpTransition";
import i18n from "i18next";
import DialogHeader from "components/DialogHeader";
import StyledAddPlantDialog from "./AddPlantDialog.style";
import useAddPlantDialog from "./useAddPlantDialog";
import useActiveDevice from "shared/hooks/useActiveDevice";
import { Box, DialogContent } from "@mui/material";
import Stepper from "components/Stepper";
import { steps } from "./AddPlantDialog.utils";

type AddPlantDialogProps = {
    open: boolean;
    handleClose: () => void;
};

const AddPlantDialog: FC<AddPlantDialogProps> = (props) => {
    const { open, handleClose } = props;

    const { activeStep, handleNextStep, handlePrevStep } = useAddPlantDialog({
        handleClose,
    });
    const { isMobile } = useActiveDevice();

    return (
        <StyledAddPlantDialog
            fullScreen={isMobile}
            open={open}
            onClose={handleClose}
            TransitionComponent={SlideUpTransition}
            disableRestoreFocus
            fullWidth
        >
            <DialogHeader
                title={i18n.t("addPlants.title")}
                handleClose={handleClose}
            />
            <DialogContent>
                <Box>{steps.current(activeStep, handleNextStep)}</Box>
                <Stepper
                    activeStep={activeStep}
                    handleNextStep={handleNextStep}
                    handlePrevStep={handlePrevStep}
                    amountOfSteps={steps.length}
                />
            </DialogContent>
        </StyledAddPlantDialog>
    );
};

export default AddPlantDialog;
