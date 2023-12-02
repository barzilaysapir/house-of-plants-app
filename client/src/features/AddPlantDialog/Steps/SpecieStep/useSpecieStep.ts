import { AddPlantData } from "features/AddPlantDialog/AddPlantDialog.types";
import { useState } from "react";
import { Plant } from "shared/types/plants";

type UseSpecieStepProps = {
    handleNextStep: (stepData: Partial<AddPlantData>) => void;
};

const useSpecieStep = ({ handleNextStep }: UseSpecieStepProps) => {
    const [searchInputVal, setSearchInputVal] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputVal(event.target.value);
    };

    const selectPlant = (specie: Plant) => {
        handleNextStep({ specie });
    };

    return {
        searchInputVal,
        handleChange,
        selectPlant,
    };
};

export default useSpecieStep;
