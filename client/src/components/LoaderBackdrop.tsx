import { Backdrop, CircularProgress } from "@mui/material";

const LoaderBackdrop = () => {
    return (
        <Backdrop
            sx={{
                zIndex: ({ zIndex }) => zIndex.drawer + 1,
                color: "#fff",
            }}
            open
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    );
};

export default LoaderBackdrop;
