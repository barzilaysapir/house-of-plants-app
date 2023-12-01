import { useState } from "react";
import useLocalStorage from "shared/hooks/useLocalStorage";
import useMutateData from "shared/hooks/useMutateData";
import { Plant } from "shared/types/plants";
import { STEPS } from "./AddPlantDialog";

type UseAddPlantDialogProps = {
    handleClose: () => void;
};

const useAddPlantDialog = (props: UseAddPlantDialogProps) => {
    const { handleClose } = props;

    const [activeStep, setActiveStep] = useState<number>(0);
    const { user } = useLocalStorage();

    const { mutate } = useMutateData({
        url: `/users/${JSON.parse(user!)._id}/addPlant`,
        onComplete: handleClose,
        refetchOnSuccessKey: "usersPlants",
    });

    const handleNextStep = () => {
        if (activeStep < STEPS.length - 1)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        else mutate({ plant: {} as Plant });
    };

    const handlePrevStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return {
        activeStep,
        handleNextStep,
        handlePrevStep,
    };
};

export default useAddPlantDialog;
