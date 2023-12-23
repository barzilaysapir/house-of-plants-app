import { Grid } from "@mui/material";
import { FC } from "react";
import { Plant } from "shared/types/plants";
import PlantCard from "features/PlantCard/PlantCard";
import PlantRoutines from "features/MyPlants/MyPlantsList/PlantRoutines/PlantRoutines";
import { CardView } from "shared/types/card";
import { MENU_OPTIONS } from "./MyPlantsList.util";
import useCardsList from "shared/hooks/useCardsList";

type MyPlantsListProps = {
    filteredPlants: Plant[];
    view: CardView;
};

const MyPlantsList: FC<MyPlantsListProps> = (props) => {
    const { filteredPlants, view } = props;

    const showPlantRoutines = view !== CardView.ROWS;
    const isCardVertical = view === CardView.GRID;

    const { getGridColumns, getImageSize } = useCardsList({ view });

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
