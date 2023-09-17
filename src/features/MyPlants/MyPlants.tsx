import { Box, Grid, Input } from "@mui/material";
import { FC } from "react";
import { Plant } from "shared/types/Plant";
import PlantCard from "components/PlantCard/PlantCard";
import useMyPlants from "./useMyPlants";
import LOCALE from "shared/utils/Locale";

type MyPlantsProps = {
    plants: Plant[]
}

const MyPlants: FC<MyPlantsProps> = (props) => {
    const { plants } = props;

    const { onSearchPlant, filteredPlants } = useMyPlants({ plants })

    return (
        <Box>
            <Input
                onChange={onSearchPlant}
                placeholder={LOCALE.myPlants.searchPlaceholder}
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


export default MyPlants;
