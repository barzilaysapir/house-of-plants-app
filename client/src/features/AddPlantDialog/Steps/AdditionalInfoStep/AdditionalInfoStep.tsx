import { FC } from "react";
import { AddPlantData } from "features/AddPlantDialog/AddPlantDialog.types";
import {
    Box,
    CardActionArea,
    CardContent,
    CardMedia,
    Stack,
    Typography,
} from "@mui/material";

type AdditionalInfoStepProps = {
    handleNextStep: (stepData: Partial<AddPlantData>) => void;
};

const AdditionalInfoStep: FC<AdditionalInfoStepProps> = (props) => {
    const { handleNextStep } = props;

    return <Stack spacing={1} sx={{ overflow: "auto" }}></Stack>;
};

export default AdditionalInfoStep;
