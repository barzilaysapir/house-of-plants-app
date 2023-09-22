import { Dialog } from "@mui/material";
import { styled } from "@mui/material";

type StyledPlantRoutineDialogProps = {
    open: boolean;
}

const StyledPlantRoutineDialog = styled(Dialog)<StyledPlantRoutineDialogProps>`
    top: calc(100% - 330px);
`;

export default StyledPlantRoutineDialog;
