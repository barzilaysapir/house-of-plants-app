import { useState } from "react";
import useLocalStorage from "shared/hooks/useLocalStorage";
import useMutateData from "shared/hooks/useMutateData";
import { steps } from "./AddSiteDialog.util";
import { AddSiteData } from "./AddSiteDialog.types";
import QueryKey from "shared/types/queryKeys";

type UseAddPlantDialogProps = {
    handleClose: () => void;
};

const useAddSiteDialog = (props: UseAddPlantDialogProps) => {
    const { handleClose } = props;

    const [activeStep, setActiveStep] = useState<number>(0);
    const [plantFormData, setPlantFormData] = useState<AddSiteData>(
        {} as AddSiteData
    );
    const { user } = useLocalStorage();

    const onClose = () => {
        setActiveStep(0);
        setPlantFormData({} as AddSiteData);
        handleClose();
    };

    const { mutate } = useMutateData({
        url: `/users/${JSON.parse(user!)._id}/addPlant`,
        onComplete: onClose,
        refetchOnSuccessKey: QueryKey.USER_PLANTS,
    });

    const handleNextStep = (newData?: Partial<AddSiteData>) => {
        const plantData = plantFormData;
        if (newData) Object.assign(plantData, newData);

        if (activeStep < steps.length - 1) {
            setPlantFormData(plantData);
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            mutate(plantData);
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

export default useAddSiteDialog;
