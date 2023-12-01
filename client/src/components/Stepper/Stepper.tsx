import { MobileStepper, useTheme } from "@mui/material";
import { FC } from "react";
import StepperButtonNext from "./StepperButtonNext";
import StepperButtonPrev from "./StepperButtonPrev";

type StepperProps = {
    amountOfSteps: number;
    activeStep: number;
    handleNextStep: any;
    handlePrevStep: any;
};

const Stepper: FC<StepperProps> = (props) => {
    const { amountOfSteps, activeStep, handleNextStep, handlePrevStep } = props;
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
                    handleNextStep={handleNextStep}
                />
            }
            backButton={
                <StepperButtonPrev
                    direction={direction}
                    activeStep={activeStep}
                    handlePrevStep={handlePrevStep}
                />
            }
        />
    );
};

export default Stepper;
