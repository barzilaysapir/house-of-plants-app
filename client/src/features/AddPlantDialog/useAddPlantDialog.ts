import { useState } from "react";
import useLocalStorage from "shared/hooks/useLocalStorage";
import useMutateData from "shared/hooks/useMutateData";
import { steps } from "./AddPlantDialog.utils";
import { AddPlantData } from "./AddPlantDialog.types";

type UseAddPlantDialogProps = {
    handleClose: () => void;
};

const useAddPlantDialog = (props: UseAddPlantDialogProps) => {
    const { handleClose } = props;

    const [activeStep, setActiveStep] = useState<number>(0);
    const [newPlantData, setNewPlantData] = useState<any>({});
    const { user } = useLocalStorage();

    const onClose = () => {
        setActiveStep(0);
        setNewPlantData({});
        handleClose();
    };

    const { mutate } = useMutateData({
        url: `/users/${JSON.parse(user!)._id}/addPlant`,
        onComplete: onClose,
        refetchOnSuccessKey: "usersPlants",
    });

    const handleNextStep = (stepData: Partial<AddPlantData>) => {
        console.log({ stepData });
        console.log({ newPlantData });
        const updatedNewPlantData = { ...newPlantData, ...stepData };
        setNewPlantData(updatedNewPlantData);
        if (activeStep < steps.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            mutate({ plant: updatedNewPlantData });
        }
    };

    const handlePrevStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return {
        onClose,
        activeStep,
        handleNextStep,
        handlePrevStep,
    };
};

export default useAddPlantDialog;
