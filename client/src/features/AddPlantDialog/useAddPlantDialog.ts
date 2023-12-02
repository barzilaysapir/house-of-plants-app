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
    const [plantFormData, setPlantFormData] = useState<AddPlantData>(
        {} as AddPlantData
    );
    const { user } = useLocalStorage();

    const onClose = () => {
        setActiveStep(0);
        setPlantFormData({} as AddPlantData);
        handleClose();
    };

    const { mutate } = useMutateData({
        url: `/users/${JSON.parse(user!)._id}/addPlant`,
        onComplete: onClose,
        refetchOnSuccessKey: "usersPlants",
    });

    const handleNextStep = (newData?: Partial<AddPlantData>) => {
        // console.log({ data });
        const updatedPlantData = plantFormData;
        if (newData) {
            Object.assign(updatedPlantData, newData);
            setPlantFormData(updatedPlantData);
        }
        if (activeStep < steps.length - 1) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            mutate({ plant: updatedPlantData });
        }
    };

    const handlePrevStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return {
        plantFormData,
        activeStep,
        handleNextStep,
        handlePrevStep,
        onClose,
    };
};

export default useAddPlantDialog;
