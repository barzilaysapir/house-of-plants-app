import { PhotoCameraRounded } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { FC, useState } from "react";
import VisuallyHiddenInput from "styles/components/VisuallyHiddenInput";
import i18n from "i18next";

type IdentifyPlantProps = {};

const IdentifyPlant: FC<IdentifyPlantProps> = (props) => {
    const [image, setImage] = useState<string>("");

    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <label className="pictureButton">
            <VisuallyHiddenInput
                type="file"
                accept="image/*"
                capture="environment"
                onChange={onImageChange}
            />

            <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
            >
                <PhotoCameraRounded fontSize="large" color="primary" />
            </IconButton>

            <Typography variant="caption" color="primary" display="block">
                {i18n.t("addPlants.scanImage")}
            </Typography>
        </label>
    );
};

export default IdentifyPlant;
