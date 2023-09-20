import { Dialog } from "@mui/material";
import { styled } from "@mui/material";

type StyledPlantCareRoutineDialogProps = {
    open: boolean;
}

const StyledPlantCareRoutineDialog = styled(Dialog)<StyledPlantCareRoutineDialogProps>`
    top: calc(100% - 330px);
`;

// export const StyledAddPlantDialogContent = styled(Container)`
//     display: flex;
//     row-gap: 20px;
//     flex-direction: column;
//     margin-block: 20px;

//     .pictureButton {
//         text-align: center;
//         align-self: center;
//         .MuiSvgIcon-root {
//             height: 1.5em;
//             width: 1.5em;
//         }
//     }
// `;

export default StyledPlantCareRoutineDialog;
