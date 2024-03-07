import { useState } from "react";
import { Plant } from "shared/types/plants";
import {AddSiteData} from "../../AddSiteDialog.types";

type UseSpeciesStepProps = {
    handleNextStep: (stepData?: Partial<AddSiteData>) => void;
};

const useDetailsStep = ({ handleNextStep }: UseSpeciesStepProps) => {
    const [searchInputVal, setSearchInputVal] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputVal(event.target.value);
    };

    const selectPlant = (species: Plant) => {
        handleNextStep({ species });
    };

    return {
        searchInputVal,
        handleChange,
        selectPlant,
    };
};

export default useDetailsStep;
