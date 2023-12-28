import { FC } from "react";
import { CircularProgress } from "@mui/material";
import StyledLoader from "./Loader.style";

const Loader: FC = () => {
    return (
        <StyledLoader>
            <CircularProgress thickness={5} size={50} />
        </StyledLoader>
    );
};

export default Loader;
