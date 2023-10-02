import { FC } from "react";
import { PlantsData } from "shared/types/plants";
import { Box } from "@mui/material";
import MyPlantsList from "features/MyPlantsList/MyPlantsList";
import AddPlantDialog from "features/AddPlantDialog/AddPlantDialog";
import { useLoaderData } from "react-router";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import MyPlantsToolbar from "features/MyPlantsToolbar/MyPlantsToolbar";
import useMyPlants from "./useMyPlants";
import MyPlantsHeader from "features/MyPlantsHeader/MyPlantsHeader";

const MyPlants: FC = () => {
    const myPlants = useLoaderData() as PlantsData;

    const { isOpen, handleOpen, handleClose } = useToggleDisplay();

    const { onSearchPlant, filteredPlants } = useMyPlants({
        plants: myPlants.data,
    });

    return (
        <>
            <MyPlantsHeader
                myPlantsAmount={myPlants.total}
                handleOpen={handleOpen}
            />

            <Box component="main">
                <MyPlantsToolbar onSearchPlant={onSearchPlant} />
                <MyPlantsList filteredPlants={filteredPlants} />
                <AddPlantDialog open={isOpen} handleClose={handleClose} />
            </Box>
        </>
    );
};

export default MyPlants;
