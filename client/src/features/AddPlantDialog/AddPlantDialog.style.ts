import { Container, Dialog } from "@mui/material";
import { styled } from "@mui/system";

export const StyledAddPlantDialogContent = styled(Container)`
    display: flex;
    row-gap: 20px;
    flex-direction: column;
    margin-top: 10px;
    height: 100%;

    .pictureButton {
        text-align: center;
        align-self: center;
        .MuiSvgIcon-root {
            height: 1.5em;
            width: 1.5em;
        }
    }
`;

type StyledAddPlantDialogProps = {
    $searching: boolean;
};

const StyledAddPlantDialog =
    styled(Dialog, {
        shouldForwardProp: (prop) => prop !== "$searching",
    }) <
    StyledAddPlantDialogProps>(({ $searching }) => ({
        "& .MuiDialog-container .MuiDialog-paper": {
            height: $searching && "calc(100% - 100px)",
        },
    }));

export default StyledAddPlantDialog;
