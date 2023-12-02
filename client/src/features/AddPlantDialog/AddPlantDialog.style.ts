import { Dialog } from "@mui/material";
import { styled } from "@mui/system";

const StyledAddPlantDialog = styled(Dialog)`
    & .MuiDialog-container .MuiDialog-paper {
        height: 90%;
        .MuiDialogContent-root > .MuiBox-root {
            height: calc(100% - 48px);
        }
    }
`;

export default StyledAddPlantDialog;
