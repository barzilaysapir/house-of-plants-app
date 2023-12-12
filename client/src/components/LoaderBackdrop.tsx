import { Backdrop, BackdropProps, CircularProgress } from "@mui/material";
import { FC } from "react";

type LoaderBackdropProps = Omit<BackdropProps, "open"> & {
    open?: boolean;
};

const LoaderBackdrop: FC<LoaderBackdropProps> = (props) => {
    const { open = true, ...backdropProps } = props;

    return (
        <Backdrop
            sx={{
                zIndex: ({ zIndex }) => zIndex.drawer + 1,
                color: "#fff",
            }}
            open={open}
            {...backdropProps}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default LoaderBackdrop;
