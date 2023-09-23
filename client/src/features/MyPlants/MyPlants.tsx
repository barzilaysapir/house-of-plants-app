import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { Plant } from "shared/types/Plants";
import PlantCard from "features/PlantCard/PlantCard";
import useMyPlants from "./useMyPlants";
import MyPlantsSearch from "./MyPlantsSearch";

type MyPlantsProps = {
    plants: Plant[];
};

const MyPlants: FC<MyPlantsProps> = (props) => {
    const { plants } = props;
    const { onSearchPlant, filteredPlants } = useMyPlants({ plants });

    return (
        <Box>
            <MyPlantsSearch onSearchPlant={onSearchPlant} />

            <Grid
                container
                marginTop={1}
                spacing={1}
                columns={{ xs: 1, sm: 2, lg: 3 }}
            >
                {filteredPlants.map((plant) => (
                    <Grid item xs={1} key={plant.id}>
                        <PlantCard key={plant.id} plant={plant} horizontal />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MyPlants;
