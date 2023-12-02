import { FC, useState } from "react";
import {
    AddPlantData,
    AddPlantField,
} from "features/AddPlantDialog/AddPlantDialog.types";
import { Box, Button, Stack, TextField } from "@mui/material";
import { PhotoCameraRounded } from "@mui/icons-material";
import VisuallyHiddenInput from "styles/components/VisuallyHiddenInput";

type AdditionalInfoStepProps = {
    handleNextStep: (stepData?: Partial<AddPlantData>) => void;
    formData: AddPlantData;
};

const AdditionalInfoStep: FC<AdditionalInfoStepProps> = (props) => {
    const { formData, handleNextStep } = props;

    const [image, setImage] = useState<string>("");

    const onImageChange = (event: any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    return (
        <Stack spacing={1} sx={{ overflow: "auto" }}>
            <Stack direction="row" spacing={1}>
                <img
                    height={150}
                    width={150}
                    src={image || formData[AddPlantField.SPECIE].image}
                    alt=""
                    style={{
                        objectFit: "cover",
                        border: "3px solid black",
                        borderRadius: 5,
                    }}
                />
                <Box>
                    <TextField
                        label="Name"
                        variant="standard"
                        defaultValue={
                            formData[AddPlantField.SPECIE].primaryName
                        }
                        placeholder={formData[AddPlantField.SPECIE].primaryName}
                        fullWidth
                    />
                    <Button
                        component="label"
                        startIcon={
                            <PhotoCameraRounded
                                fontSize="large"
                                color="primary"
                            />
                        }
                    >
                        Upload Custom Image
                        <VisuallyHiddenInput
                            type="file"
                            accept="image/*"
                            capture="environment"
                            onChange={onImageChange}
                        />
                    </Button>
                </Box>
            </Stack>
            {/* 
            <TextField
                label="Custom Name"
                variant="standard"
                value={formData[AddPlantField.SPECIE].primaryName}
            /> */}
        </Stack>
    );
};

export default AdditionalInfoStep;
