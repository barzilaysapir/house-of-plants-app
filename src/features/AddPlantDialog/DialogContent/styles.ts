import { Container, styled } from "@mui/material";

const StyledDialogContent = styled(Container)`
    display: flex;
    row-gap: 20px;
    flex-direction: column;
    margin-block: 20px;

    .pictureButton {
        text-align: center;
        align-self: center;
        .MuiSvgIcon-root {
            height: 2em;
            width: 2em;
        }
    }
`;

export default StyledDialogContent;
