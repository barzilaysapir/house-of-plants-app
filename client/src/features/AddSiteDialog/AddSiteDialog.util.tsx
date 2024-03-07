import { AddSiteData } from "./AddSiteDialog.types";
import DetailsStep from "./Steps/DetailsStep/DetailsStep";
import { ReactNode } from "react";

type Step = (
    activeStep: number,
    handleNextStep: (stepData?: Partial<AddSiteData>) => void,
    formData: AddSiteData
) => ReactNode;

const STEPS = [DetailsStep];

export const steps: { length: number; current: Step } = {
    length: STEPS.length,
    current: (
        activeStep: number,
        handleNextStep: (stepData?: Partial<AddSiteData>) => void,
        formData: AddSiteData
    ) => {
        switch (activeStep) {
            case 0:
                return <DetailsStep handleNextStep={handleNextStep} />;
            // case 1:
            //     return <SoilStep handleNextStep={handleNextStep} />;
            default:
                return null;
        }
    },
};
