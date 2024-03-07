import { FC } from "react";
import SlideUpTransition from "components/SlideUpTransition";
import i18n from "i18next";
import DialogHeader from "components/DialogHeader";
import StyledAddSiteDialog from "./AddSiteDialog.style";
import useAddSiteDialog from "./useAddSiteDialog";
import useActiveDevice from "shared/hooks/useActiveDevice";
import { Box, DialogContent } from "@mui/material";
import Stepper from "components/Stepper";
import { steps } from "./AddSiteDialog.util";

type AddPlantDialogProps = {
    open: boolean;
    handleClose: () => void;
};

const AddSiteDialog: FC<AddPlantDialogProps> = (props) => {
    const { open, handleClose } = props;

    const {
        plantFormData,
        activeStep,
        handleNextStep,
        handlePrevStep,
        onClose,
    } = useAddSiteDialog({
        handleClose,
    });
    const { isMobile } = useActiveDevice();

    return (
        <StyledAddSiteDialog
            fullScreen={isMobile}
            open={open}
            onClose={onClose}
            TransitionComponent={SlideUpTransition}
            disableRestoreFocus
            fullWidth
        >
            <DialogHeader
                title={i18n.t("addSites.title")}
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
                    />
                )}
            </DialogContent>
        </StyledAddSiteDialog>
    );
};

export default AddSiteDialog;
