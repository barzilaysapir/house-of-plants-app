import { FC } from "react";
import { AddPlantData } from "features/AddPlantDialog/AddPlantDialog.types";
import { Stack } from "@mui/material";
import { SOIL_TYPES } from "./SoilStep.utils";
import Card from "components/Card/Card";

type SoilStepProps = {
    handleNextStep: (stepData?: Partial<AddPlantData>) => void;
};

const SoilStep: FC<SoilStepProps> = (props) => {
    const { handleNextStep } = props;

    return (
        <Stack spacing={1} sx={{ overflow: "auto" }}>
            {SOIL_TYPES.map((soil) => (
                <Card
                    key={soil.id}
                    data={soil}
                    onClick={() => handleNextStep({ soil: soil.id })}
                />
            ))}
        </Stack>
    );
};

export default SoilStep;
