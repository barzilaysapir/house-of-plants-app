import { FC } from "react";
import { Box } from "@mui/material";
import MyPlantsList from "features/MyPlantsList/MyPlantsList";
import AddPlantDialog from "features/AddPlantDialog/AddPlantDialog";
import { useLoaderData } from "react-router";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import MyPlantsToolbar from "features/MyPlantsToolbar/MyPlantsToolbar";
import useMyPlants from "./useMyPlants";
import MyPlantsHeader from "features/MyPlantsHeader/MyPlantsHeader";
import usePlantsView from "shared/hooks/usePlantsView";
import useFetchData from "shared/hooks/useFetchData";
import useLocalStorage from "shared/hooks/useLocalStorage";
import LoaderBackdrop from "components/LoaderBackdrop";
import EmptyState from "./EmptyState";

const MyPlants: FC = () => {
    // const myPlants = useLoaderData() as PlantsData;
    const { user } = useLocalStorage();

    const { loading, data } = useFetchData({
        keys: ["usersPlants"],
        url: `/users/${JSON.parse(user!)._id}/plants`,
    });

    const { isOpen, handleOpen, handleClose } = useToggleDisplay();
    const { view, onChangeView } = usePlantsView();

    const { onSearchPlant, filteredPlants } = useMyPlants({
        plants: data,
    });

    if (loading) return <LoaderBackdrop />;

    return (
        <>
            <MyPlantsHeader
                myPlantsAmount={data.length}
                handleOpen={handleOpen}
            />

            <MyPlantsToolbar
                onSearchPlant={onSearchPlant}
                view={view}
                onChangeView={onChangeView}
            />

            <Box sx={{ height: "100%" }} component="main">
                {filteredPlants.length ? (
                    <MyPlantsList filteredPlants={filteredPlants} view={view} />
                ) : (
                    <EmptyState handleOpen={handleOpen} />
                )}
            </Box>

            <AddPlantDialog open={isOpen} handleClose={handleClose} />
        </>
    );
};

export default MyPlants;
