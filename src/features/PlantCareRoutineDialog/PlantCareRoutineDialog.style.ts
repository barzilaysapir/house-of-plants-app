import { Dialog } from "@mui/material";
import { styled } from "@mui/material";

type StyledPlantCareRoutineDialogProps = {
    open: boolean;
}

const StyledPlantCareRoutineDialog = styled(Dialog)<StyledPlantCareRoutineDialogProps>`
    top: calc(100% - 330px);
`;

export default StyledPlantCareRoutineDialog;
