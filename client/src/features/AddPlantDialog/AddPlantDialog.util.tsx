import { AddPlantData } from "./AddPlantDialog.types";
import DetailsStep from "./Steps/DetailsStep/DetailsStep";
import SoilStep from "./Steps/SoilStep/SoilStep";
import SpecieStep from "./Steps/SpecieStep/SpecieStep";
import { ReactNode } from "react";

type Step = (
    activeStep: number,
    handleNextStep: (stepData?: Partial<AddPlantData>) => void,
    formData: AddPlantData
) => ReactNode;

const STEPS = [SpecieStep, SoilStep, DetailsStep];

export const steps: { length: number; current: Step } = {
    length: STEPS.length,
    current: (
        activeStep: number,
        handleNextStep: (stepData?: Partial<AddPlantData>) => void,
        formData: AddPlantData
    ) => {
        switch (activeStep) {
            case 0:
                return <SpecieStep handleNextStep={handleNextStep} />;
            case 1:
                return <SoilStep handleNextStep={handleNextStep} />;
            case 2:
                return (
                    <DetailsStep
                        formData={formData}
                        handleNextStep={handleNextStep}
                    />
                );
            default:
                return null;
        }
    },
};
