import { useState } from "react";
import useLocalStorage from "shared/hooks/useLocalStorage";
import useMutateData from "shared/hooks/useMutateData";
import { Plant } from "shared/types/plants";

type UseAddPlantDialogProps = {
    handleClose: () => void;
};

const useAddPlantDialog = (props: UseAddPlantDialogProps) => {
    const { handleClose } = props;

    const [searchInputVal, setSearchInputVal] = useState<string>("");

    const { user } = useLocalStorage();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInputVal(event.target.value);
    };

    const onClose = () => {
        setSearchInputVal("");
        handleClose();
    };

    const { mutate } = useMutateData({
        url: `/users/${JSON.parse(user!)._id}/addPlant`,
        onComplete: onClose,
        refetchOnSuccessKey: "usersPlants",
    });

    const selectPlant = (plant: Plant) => {
        mutate({ plant });
    };

    return {
        onClose,
        searchInputVal,
        handleChange,
        selectPlant,
    };
};

export default useAddPlantDialog;
