import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import { Button, Direction } from "@mui/material";
import i18n from "i18next";
import { FC } from "react";

type StepperButtonPrevProps = {
    direction: Direction;
    activeStep: number;
    handlePrevStep: any;
};

const StepperButtonPrev: FC<StepperButtonPrevProps> = (props) => {
    const { direction, activeStep, handlePrevStep } = props;

    return (
        <Button
            size="small"
            onClick={handlePrevStep}
            disabled={activeStep === 0}
        >
            {direction === "rtl" ? (
                <KeyboardArrowRight />
            ) : (
                <KeyboardArrowLeft />
            )}
            {i18n.t("prev")}
        </Button>
    );
};

export default StepperButtonPrev;
