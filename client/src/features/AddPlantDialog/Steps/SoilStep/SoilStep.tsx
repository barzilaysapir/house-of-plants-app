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
import { SOIL_TYPES } from "./SoilStep.utils";

type SoilStepProps = {
    handleNextStep: (stepData: Partial<AddPlantData>) => void;
};

const SoilStep: FC<SoilStepProps> = (props) => {
    const { handleNextStep } = props;

    return (
        <Stack spacing={1} sx={{ overflow: "auto" }}>
            {SOIL_TYPES.map((soil) => (
                <CardActionArea
                    key={soil.id}
                    onClick={() => handleNextStep({ soil: soil.id })}
                >
                    <CardContent sx={{ display: "flex", gap: 1 }}>
                        <CardMedia
                            image={soil.image}
                            component="img"
                            sx={{ width: 100, aspectRatio: "1/1" }}
                        />
                        <Box>
                            <Typography
                                variant="body1"
                                component="h2"
                                fontWeight={600}
                            >
                                {soil.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {soil.description}
                            </Typography>
                        </Box>
                    </CardContent>
                </CardActionArea>
            ))}
        </Stack>
    );
};

export default SoilStep;
