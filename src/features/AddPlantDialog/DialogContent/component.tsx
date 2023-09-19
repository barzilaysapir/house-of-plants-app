import { Search, PhotoCameraRounded } from "@mui/icons-material";
import { Box, Chip, Divider, IconButton, Input, InputAdornment, TextField, Typography } from "@mui/material"
import LOCALE from "locale/Locale";
import { FC } from "react";
import VisuallyHiddenInput from "styles/VisuallyHiddenInput";
import StyledDialogContent from "./styles";

const DialogContent: FC = () => {

    return (
        <StyledDialogContent>
            <TextField
                label={LOCALE.addPlants.searchByName}
                variant="filled"
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
                autoFocus
                focused
            />

            <Divider>
                <Chip label={LOCALE.or} />
            </Divider>

            <label className="pictureButton">
                <VisuallyHiddenInput type="file" accept="image/*" capture="environment" />
                <IconButton
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                >
                    <PhotoCameraRounded fontSize="large" color="primary" />
                </IconButton>
                <Typography variant="caption" color="primary" display="block">
                    {LOCALE.addPlants.scanImage}
                </Typography>
            </label>
        </StyledDialogContent >
    )
};

export default DialogContent;
