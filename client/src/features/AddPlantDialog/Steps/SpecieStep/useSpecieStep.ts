import { useState } from "react";
import { Plant } from "shared/types/plants";

const useSpecieStep = () => {
    const [searchInputVal, setSearchInputVal] = useState<string>("");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputVal(event.target.value);
    };

    const selectPlant = (plant: Plant) => {
        // saveForm({ plant });
    };

    return {
        searchInputVal,
        handleChange,
        selectPlant,
    };
};

export default useSpecieStep;
