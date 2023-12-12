import { FC } from "react";
import { Box } from "@mui/material";
import AddPlantDialog from "features/AddPlantDialog/AddPlantDialog";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import MyPlantsToolbar from "features/MyPlants/MyPlantsToolbar/MyPlantsToolbar";
import useMyPlants from "./useMyPlants";
import MyPlantsHeader from "features/MyPlants/MyPlantsHeader";
import useCardsView from "shared/hooks/useCardsView";
import useFetchData from "shared/hooks/useFetchData";
import useLocalStorage from "shared/hooks/useLocalStorage";
import LoaderBackdrop from "components/LoaderBackdrop";
import MyPlantsContent from "features/MyPlants/MyPlantsContent";

const MyPlants: FC = () => {
    // const myPlants = useLoaderData() as PlantsData;
    const user = JSON.parse(useLocalStorage().user);

    const { loading: loadingPlants, data: plants } = useFetchData({
        keys: ["userPlants"],
        url: `/users/${user._id}/plants`,
    });

    const { loading: loadingSites, data: sites } = useFetchData({
        keys: ["userSites"],
        url: `/users/${user!._id}/sites`,
    });

    const { isOpen, handleOpen, handleClose } = useToggleDisplay();
    const { view, onChangeView } = useCardsView();

    const { onSearchPlant, filteredPlants, currentTab, handleTabChange } =
        useMyPlants({
            plants,
        });

    if (loadingPlants || loadingSites) return <LoaderBackdrop />;

    return (
        <>
            <MyPlantsHeader
                myPlantsAmount={plants.length}
                handleOpen={handleOpen}
            />

            <MyPlantsToolbar
                onSearchPlant={onSearchPlant}
                view={view}
                onChangeView={onChangeView}
                currentTab={currentTab}
                handleTabChange={handleTabChange}
            />

            <Box sx={{ height: "100%" }} component="main">
                <MyPlantsContent
                    tab={currentTab}
                    plants={filteredPlants}
                    sites={sites}
                    handleOpen={handleOpen}
                    view={view}
                />
            </Box>

            <AddPlantDialog open={isOpen} handleClose={handleClose} />
        </>
    );
};

export default MyPlants;
