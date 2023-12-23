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
import { Outlet } from "react-router";
import { MyPlantsOutletContext } from "shared/types/UI";

const MyPlants: FC = () => {
    const user = JSON.parse(useLocalStorage().user);

    const { loading: loadingPlants, data: plants } = useFetchData({
        keys: ["userPlants"],
        url: `/users/${user._id}/plants`,
    });

    const { isOpen, handleOpen, handleClose } = useToggleDisplay();
    const { view, onChangeView } = useCardsView();

    const { onSearchPlant, filteredPlants } = useMyPlants({
        plants,
    });

    const context: MyPlantsOutletContext = { view, filteredPlants, handleOpen };

    if (loadingPlants) return <LoaderBackdrop />;

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
            />

            <Box sx={{ height: "100%" }} component="main">
                <Outlet context={context} />
            </Box>

            <AddPlantDialog open={isOpen} handleClose={handleClose} />
        </>
    );
};

export default MyPlants;
