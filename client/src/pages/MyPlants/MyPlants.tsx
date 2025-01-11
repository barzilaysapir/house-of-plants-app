import { FC } from "react";
import AddPlantDialog from "features/AddPlantDialog/AddPlantDialog";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import MyPlantsHeader from "features/MyPlants/MyPlantsHeader";
import useFetchData from "shared/hooks/useFetchData";
import useLocalStorage from "shared/hooks/useLocalStorage";
import LoaderBackdrop from "components/LoaderBackdrop";
import { Outlet } from "react-router-dom";
import { MyPlantsOutletContext } from "shared/types/UI";
import MyPlantsTabs from "features/MyPlants/MyPlantsTabs";
import QueryKey from "shared/types/queryKeys";

const MyPlants: FC = () => {
    const user = JSON.parse(useLocalStorage().user);

    const { loading, data } = useFetchData({
        keys: [QueryKey.USER_PLANTS],
        url: `/users/${user._id}/plants`,
    });

    const { isOpen, handleOpen, handleClose } = useToggleDisplay(); // toggleAddPlantDialogDisplay

    const context: MyPlantsOutletContext = {
        plants: data,
        loadingPlants: loading,
        handleOpen,
    };

    if (loading) return <LoaderBackdrop />;

    return (
        <>
            <MyPlantsHeader
                myPlantsAmount={data.length}
                handleOpen={handleOpen}
            />

            <MyPlantsTabs />

            <Outlet context={context} />

            <AddPlantDialog open={isOpen} handleClose={handleClose} />
        </>
    );
};

export default MyPlants;
