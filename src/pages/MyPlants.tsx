import { FC } from "react";
import PageTitle from "components/PageTitle";
import { MY_PLANTS } from "../mocks/MyPlants";
import { Plant } from "shared/types/Plant";
import { Box } from "@mui/material";
import MyPlantsList from "features/MyPlantsList/MyPlantsList";
import LOCALE from "shared/utils/Locale";

type MyPlantsProps = {}

const MyPlants: FC<MyPlantsProps> = props => {
    const subtitle = LOCALE.formatString(LOCALE.myPlants.subtitle, MY_PLANTS.total) as string;

    return (
        <Box>
            <PageTitle title={LOCALE.myPlants.title} subtitle={subtitle} />
            <main>
                <MyPlantsList plants={MY_PLANTS.data as Plant[]} />
            </main>
        </Box>
    )
}

export default MyPlants;
