import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { Plant } from "shared/types/plants";
import PlantCard from "features/PlantCard/PlantCard";
import PlantRoutines from "features/PlantRoutines/PlantRoutines";

type MyPlantsProps = {
    filteredPlants: Plant[];
};

const MyPlants: FC<MyPlantsProps> = (props) => {
    const { filteredPlants } = props;

    return (
        <Box>
            <Grid
                container
                marginTop={1}
                spacing={1}
                columns={{ xs: 1, sm: 2, lg: 3 }}
            >
                {filteredPlants.map((plant) => (
                    <Grid item xs={1} key={plant.id}>
                        <PlantCard key={plant.id} plant={plant}>
                            <PlantRoutines
                                name={plant.primaryName}
                                care={plant.care}
                            />
                        </PlantCard>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MyPlants;
