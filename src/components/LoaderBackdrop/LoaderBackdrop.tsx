import { CircularProgress } from "@mui/material";
import StyledLoaderBackdrop from "./LoaderBackdrop.style";

const LoaderBackdrop = () => {
    return (
        <StyledLoaderBackdrop open>
            <CircularProgress color="inherit" />
        </StyledLoaderBackdrop>
    );
};

export default LoaderBackdrop;
