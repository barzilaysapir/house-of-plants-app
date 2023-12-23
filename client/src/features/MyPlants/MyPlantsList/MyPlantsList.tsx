import { Grid } from "@mui/material";
import { FC } from "react";
import PlantCard from "features/PlantCard/PlantCard";
import PlantRoutines from "features/MyPlants/MyPlantsList/PlantRoutines/PlantRoutines";
import { CardView } from "shared/types/card";
import { MENU_OPTIONS } from "./MyPlantsList.util";
import useCardsList from "shared/hooks/useCardsList";
import EmptyState from "components/EmptyState";
import i18n from "config/locales/i18n";
import { useOutletContext } from "react-router";
import { MyPlantsOutletContext } from "shared/types/UI";

const MyPlantsList: FC = () => {
    const { view, filteredPlants, handleOpen } =
        useOutletContext<MyPlantsOutletContext>();

    const showPlantRoutines = view !== CardView.ROWS;
    const isCardVertical = view === CardView.GRID;

    const { getGridColumns, getImageSize } = useCardsList({ view });

    if (filteredPlants.length === 0)
        return (
            <EmptyState
                handleOpen={handleOpen}
                callToAction={{ label: i18n.t("myPlants.emptyState") }}
            />
        );

    return (
        <Grid
            container
            marginTop={1}
            spacing={1}
            columns={getGridColumns()}
            alignItems="stretch"
        >
            {filteredPlants.map((plant) => (
                <Grid item xs={1} key={plant.id}>
                    <PlantCard
                        key={plant.id}
                        plant={plant}
                        size={getImageSize()}
                        vertical={isCardVertical}
                        menuOptions={MENU_OPTIONS}
                    >
                        {showPlantRoutines && (
                            <PlantRoutines
                                name={plant.primaryName}
                                care={plant.care!}
                            />
                        )}
                    </PlantCard>
                </Grid>
            ))}
        </Grid>
    );
};

export default MyPlantsList;
