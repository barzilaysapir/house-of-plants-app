import { FC } from "react";
import SlideUpTransition from "components/SlideUpTransition";
import i18n from "i18next";
import DialogHeader from "components/DialogHeader";
import StyledAddPlantDialog from "./AddPlantDialog.style";
import useAddPlantDialog from "./useAddPlantDialog";
import useActiveDevice from "shared/hooks/useActiveDevice";
import { Box, DialogContent } from "@mui/material";
import Stepper from "components/Stepper";
import { steps } from "./AddPlantDialog.util";
import { AddPlantField } from "./AddPlantDialog.types";

type AddPlantDialogProps = {
    open: boolean;
    handleClose: () => void;
};

const AddPlantDialog: FC<AddPlantDialogProps> = (props) => {
    const { open, handleClose } = props;

    const {
        plantFormData,
        activeStep,
        handleNextStep,
        handlePrevStep,
        onClose,
    } = useAddPlantDialog({
        handleClose,
    });
    const { isMobile } = useActiveDevice();

    return (
        <StyledAddPlantDialog
            fullScreen={isMobile}
            open={open}
            onClose={onClose}
            TransitionComponent={SlideUpTransition}
            disableRestoreFocus
            fullWidth
        >
            <DialogHeader
                title={i18n.t("addPlants.title")}
                handleClose={onClose}
                closable
            />

            <DialogContent>
                <Box>
                    {steps.current(activeStep, handleNextStep, plantFormData)}
                </Box>

                {activeStep !== 0 && (
                    <Stepper
                        activeStep={activeStep}
                        handleNext={handleNextStep}
                        handlePrev={handlePrevStep}
                        amountOfSteps={steps.length}
                        disableNext={!plantFormData[AddPlantField.SPECIE]}
                    />
                )}
            </DialogContent>
        </StyledAddPlantDialog>
    );
};

export default AddPlantDialog;
