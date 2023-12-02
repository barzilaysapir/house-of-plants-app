import { AddPlantData } from "./AddPlantDialog.types";
import SpecieStep from "./Steps/SpecieStep/SpecieStep";
import { ReactNode } from "react";

const STEPS = [SpecieStep];

type Step = (
    activeStep: number,
    handleNextStep: (stepData: Partial<AddPlantData>) => void
) => ReactNode;

export const steps: { length: number; current: Step } = {
    length: 0,
    current: () => null,
};

steps.length = STEPS.length;

steps.current = (
    activeStep: number,
    handleNextStep: (stepData: Partial<AddPlantData>) => void
) => {
    switch (activeStep) {
        case 0:
            return <SpecieStep handleNextStep={handleNextStep} />;
        default:
            return null;
    }
};
