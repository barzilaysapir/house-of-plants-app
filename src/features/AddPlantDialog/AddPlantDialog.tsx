import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import StyledAddPlantDialog from "./AddPlantDialog.style";
import AddPlantDialogContent from "./AddPlantDialogContent";
import LOCALE from "config/locale/Locale";
import Transition from "components/Transition/Transition";

type AddPlantDialogProps = {
    open: boolean;
    handleClose: () => void;
};

const AddPlantDialog: FC<AddPlantDialogProps> = (props) => {
    const { open, handleClose } = props;
    const searchInputRef = useRef<HTMLInputElement>(null);

    return (
        <StyledAddPlantDialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
            // focused={document.activeElement === searchInputRef.current}
        >
            <AppBar sx={{ position: "relative" }}>
                <Toolbar
                    variant="dense"
                    sx={{ justifyContent: "space-between" }}
                >
                    <Typography variant="h6" component="h3" sx={{ ml: 2 }}>
                        {LOCALE.addPlants.title}
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

            <AddPlantDialogContent searchInputRef={searchInputRef} />
        </StyledAddPlantDialog>
    );
};

export default AddPlantDialog;
