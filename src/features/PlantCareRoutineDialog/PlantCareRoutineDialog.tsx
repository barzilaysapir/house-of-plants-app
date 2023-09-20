import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC, useRef } from "react";
import CloseIcon from "@mui/icons-material/Close";
import LOCALE from "config/locale/Locale";
import StyledPlantCareRoutineDialog from "./PlantCareRoutineDialog.style";
import Transition from "components/Transition/Transition";
import { PlantCareRoutine } from "shared/types/Plants";

type PlantCareRoutineDialogProps = {
    open: boolean;
    careRoutine?: PlantCareRoutine | null;
    handleClose: () => void;
};

const PlantCareRoutineDialog: FC<PlantCareRoutineDialogProps> = (props) => {
    const { open, careRoutine, handleClose } = props;
    const searchInputRef = useRef<HTMLInputElement>(null);

    return (
        <StyledPlantCareRoutineDialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={Transition}
        >
            <AppBar sx={{ position: "relative" }}>
                <Toolbar
                    variant="dense"
                    sx={{ justifyContent: "space-between" }}
                >
                    <Typography variant="h6" component="h3" sx={{ ml: 2 }}>
                        {careRoutine && LOCALE[careRoutine]}
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

            {/* <AddPlantDialogContent searchInputRef={searchInputRef} /> */}
        </StyledPlantCareRoutineDialog>
    );
};

export default PlantCareRoutineDialog;
