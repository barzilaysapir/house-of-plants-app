import { Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { PlantCareRoutine } from "shared/types/plants";
import i18n from "i18next";
import DialogHeader from "components/DialogHeader";

type RoutineHeaderProps = {
    plantName: string;
    routineName: PlantCareRoutine;
    handleClose: () => void;
};

const RoutineHeader: FC<RoutineHeaderProps> = (props) => {
    const { plantName, routineName, handleClose } = props;

    return (
        <DialogHeader
            title={
                <Stack direction="row" spacing={1} alignItems="baseline">
                    <b>{i18n.t(routineName)} </b>
                    <Divider variant="middle" orientation="vertical" flexItem />
                    <Typography variant="body2" display="inline-block">
                        {plantName}
                    </Typography>
                </Stack>
            }
            handleClose={handleClose}
        />
    );
};

export default RoutineHeader;
