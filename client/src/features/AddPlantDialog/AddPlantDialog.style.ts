import { Dialog, DialogContent } from "@mui/material";
import { styled } from "@mui/system";

export const StyledAddPlantDialogContent = styled(DialogContent)`
    display: flex;
    flex-direction: column;
    row-gap: 20px;

    .pictureButton {
        text-align: center;
        .MuiSvgIcon-root {
            height: 1.5em;
            width: 1.5em;
        }
    }
`;

const StyledAddPlantDialog = styled(Dialog)`
    & .MuiDialog-container .MuiDialog-paper {
        height: 90%;
    }
`;

export default StyledAddPlantDialog;
