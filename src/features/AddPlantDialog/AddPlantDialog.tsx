import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import StyledAddPlantDialog from "./AddPlantDialog.style";
import AddPlantDialogContent from "./AddPlantDialogContent";
import SlideUpTransition from "components/Transition/SlideUpTransition";
import i18n from "i18next";

type AddPlantDialogProps = {
    open: boolean;
    handleClose: () => void;
};

const AddPlantDialog: FC<AddPlantDialogProps> = (props) => {
    const { open, handleClose } = props;

    return (
        <StyledAddPlantDialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={SlideUpTransition}
        >
            <AppBar>
                <Toolbar variant="dense">
                    <Typography variant="h6" component="h3" sx={{ ml: 2 }}>
                        {i18n.t("addPlants.title")}
                    </Typography>

                    <IconButton
                        edge="start"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <CloseIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <AddPlantDialogContent />
        </StyledAddPlantDialog>
    );
};

export default AddPlantDialog;
