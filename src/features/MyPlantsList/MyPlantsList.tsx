import { Box, Grid, Input } from "@mui/material";
import { FC } from "react";
import { Plant } from "shared/types";
import PlantCard from "components/PlantCard/PlantCard";
import useMyPlantsList from "./useMyPlantsList";

type MyPlantsListProps = {
    plants: Plant[]
}

const MyPlantsList: FC<MyPlantsListProps> = (props) => {
    const { plants } = props;

    const { onSearchPlant, filteredPlants } = useMyPlantsList({ plants })

    return (
        <Box>
            <Input
                onChange={onSearchPlant}
                placeholder="Search in your plants"
                fullWidth
            />

            <Grid container marginTop={1} spacing={1} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
                {filteredPlants.map((plant) => (
                    <Grid item xs={1} key={plant.id}>
                        <PlantCard key={plant.id} {...plant} horizontal />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}


export default MyPlantsList;