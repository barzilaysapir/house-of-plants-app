import { Search, PhotoCameraRounded } from "@mui/icons-material";
import {
    Chip,
    Divider,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import { FC, useState } from "react";
import VisuallyHiddenInput from "styles/VisuallyHiddenInput";
import { StyledAddPlantDialogContent } from "./AddPlantDialog.style";
import i18n from "i18next";

type AddPlantDialogContentProps = {};

const AddPlantDialogContent: FC<AddPlantDialogContentProps> = (props) => {
    const [image, setImage] = useState<string>("");

    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <StyledAddPlantDialogContent>
            <TextField
                label={i18n.t("addPlants.searchByName")}
                size="small"
                margin="normal"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Search />
                        </InputAdornment>
                    ),
                }}
                fullWidth
                focused
            />

            <Divider>
                <Chip label={i18n.t("or")} />
            </Divider>

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
        </StyledAddPlantDialogContent>
    );
};

export default AddPlantDialogContent;
