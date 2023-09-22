import { Container, styled } from "@mui/material";

export const StyledAddPlantDialogContent = styled(Container)`
    display: flex;
    row-gap: 20px;
    flex-direction: column;
    margin-top: 10px;

    .pictureButton {
        text-align: center;
        align-self: center;
        .MuiSvgIcon-root {
            height: 1.5em;
            width: 1.5em;
        }
    }
`;
