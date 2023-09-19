import styled from "@emotion/styled";
import { Dialog } from "@mui/material";

const StyledAddPlantDialog = styled(Dialog)`
    top: calc(100% - 350px);
    &.open {
        top: 170px;
    }
`;

export default StyledAddPlantDialog;
