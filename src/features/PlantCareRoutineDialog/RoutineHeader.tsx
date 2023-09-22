import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { FC } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { PlantCareRoutine } from "shared/types/Plants";
import i18n from "i18next";

type RoutineHeaderProps = {
    plantName: string;
    careRoutine: PlantCareRoutine;
    handleClose: () => void;
};

const RoutineHeader: FC<RoutineHeaderProps> = (props) => {
    const { plantName, careRoutine, handleClose } = props;

    return (
        <AppBar sx={{ position: "relative" }}>
            <Toolbar variant="dense" sx={{ justifyContent: "space-between" }}>
                <Typography variant="h6" component="h3" sx={{ ml: 2 }}>
                    {/* {LOCALE[careRoutine]} */}
                    {`${i18n.t([careRoutine])} (${plantName})`}
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
    );
};

export default RoutineHeader;
