import { Box } from "@mui/material";
import { styled } from "@mui/system";

const StyledSpecieStep = styled(Box)`
    height: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    overflow: auto;

    .pictureButton {
        text-align: center;
        .MuiSvgIcon-root {
            height: 1.5em;
            width: 1.5em;
        }
    }
`;

export default StyledSpecieStep;
