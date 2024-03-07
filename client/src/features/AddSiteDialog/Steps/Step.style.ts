import { Stack, styled } from "@mui/material";
import theme from "config/theme";

const StyledStep = styled(Stack)`
    gap: ${theme.spacing(1)};
    overflow: auto;
`;

export default StyledStep;
