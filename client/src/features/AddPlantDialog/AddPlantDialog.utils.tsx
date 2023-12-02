import { AddPlantData } from "./AddPlantDialog.types";
import SoilStep from "./Steps/SoilStep/SoilStep";
import SpecieStep from "./Steps/SpecieStep/SpecieStep";
import { ReactNode } from "react";

type Step = (
    activeStep: number,
    handleNextStep: (stepData: Partial<AddPlantData>) => void
) => ReactNode;

const STEPS = [SpecieStep, SoilStep];

export const steps: { length: number; current: Step } = {
    length: STEPS.length,
    current: (
        activeStep: number,
        handleNextStep: (stepData: Partial<AddPlantData>) => void
    ) => {
        switch (activeStep) {
            case 0:
                return <SpecieStep handleNextStep={handleNextStep} />;
            case 1:
                return <SoilStep handleNextStep={handleNextStep} />;
            default:
                return null;
        }
    },
};
