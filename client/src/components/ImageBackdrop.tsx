import { Backdrop, BackdropProps, Zoom } from "@mui/material";
import { FC } from "react";

type ImageBackdropProps = BackdropProps & {
    image: string;
};

const ImageBackdrop: FC<ImageBackdropProps> = (props) => {
    const { open, image, ...backdropProps } = props;

    return (
        <Backdrop
            open={open}
            sx={{
                zIndex: (theme) => theme.zIndex.drawer + 1,
            }}
            {...backdropProps}
        >
            <Zoom in={open}>
                <img src={image} />
            </Zoom>
        </Backdrop>
    );
};

export default ImageBackdrop;
