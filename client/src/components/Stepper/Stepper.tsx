import { MobileStepper, useTheme } from "@mui/material";
import { FC } from "react";
import StepperButtonNext from "./StepperButtonNext";
import StepperButtonPrev from "./StepperButtonPrev";

type StepperProps = {
    amountOfSteps: number;
    activeStep: number;
    handleNext: (stepData?: any) => void;
    handlePrev: () => void;
    disableNext: boolean;
};

const Stepper: FC<StepperProps> = (props) => {
    const { amountOfSteps, activeStep, handleNext, handlePrev, disableNext } =
        props;
    const { direction } = useTheme();

    return (
        <MobileStepper
            variant="progress"
            steps={amountOfSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
                <StepperButtonNext
                    direction={direction}
                    handleNextStep={handleNext}
                    activeStep={activeStep}
                    amountOfSteps={amountOfSteps}
                    disabled={disableNext}
                />
            }
            backButton={
                <StepperButtonPrev
                    direction={direction}
                    activeStep={activeStep}
                    handlePrevStep={handlePrev}
                />
            }
        />
    );
};

export default Stepper;
