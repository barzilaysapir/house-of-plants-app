import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Button, Direction } from "@mui/material";
import i18n from "i18next";
import { FC } from "react";

type StepperButtonNextProps = {
    direction: Direction;
    handleNextStep: (stepData: any) => void;
    amountOfSteps: number;
    activeStep: number;
};

const StepperButtonNext: FC<StepperButtonNextProps> = (props) => {
    const { direction, handleNextStep, amountOfSteps, activeStep } = props;

    return (
        <Button size="small" onClick={handleNextStep}>
            {i18n.t("next")}
            {direction === "rtl" ? (
                <KeyboardArrowLeft />
            ) : (
                <KeyboardArrowRight />
            )}
        </Button>
    );
};

export default StepperButtonNext;
