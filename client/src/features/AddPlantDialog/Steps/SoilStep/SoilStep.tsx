import { FC } from "react";
import { AddPlantData } from "features/AddPlantDialog/AddPlantDialog.types";
import { SOIL_TYPES } from "./SoilStep.util";
import Card from "components/Card";
import { CardImageSize } from "shared/types/card";
import StyledStep from "../Step.style";

type SoilStepProps = {
    handleNextStep: (stepData?: Partial<AddPlantData>) => void;
};

const SoilStep: FC<SoilStepProps> = (props) => {
    const { handleNextStep } = props;

    return (
        <StyledStep>
            {SOIL_TYPES.map((soil) => (
                <Card
                    key={soil.id}
                    data={soil}
                    onClick={() => handleNextStep({ soil: soil.id })}
                    size={CardImageSize.SMALL}
                />
            ))}
        </StyledStep>
    );
};

export default SoilStep;
