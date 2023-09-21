import { Box, Grid, InputAdornment, TextField } from "@mui/material";
import { FC } from "react";
import { Plant } from "shared/types/Plants";
import PlantCard from "components/PlantCard/PlantCard";
import useMyPlants from "./useMyPlants";
import { Search } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

type MyPlantsProps = {
    plants: Plant[];
};

const MyPlants: FC<MyPlantsProps> = (props) => {
    const { plants } = props;

    const { t } = useTranslation();
    const { onSearchPlant, filteredPlants } = useMyPlants({ plants });

    return (
        <Box>
            <TextField
                onChange={onSearchPlant}
                placeholder={t("myPlants.searchPlaceholder")}
                fullWidth
                variant="standard"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <Search />
                        </InputAdornment>
                    ),
                }}
            />

            <Grid
                container
                marginTop={1}
                spacing={1}
                columns={{ xs: 1, sm: 2, lg: 3 }}
            >
                {filteredPlants.map((plant) => (
                    <Grid item xs={1} key={plant.id}>
                        <PlantCard key={plant.id} {...plant} horizontal />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MyPlants;
