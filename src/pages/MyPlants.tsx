import { FC } from "react";
import PageTitle from "components/PageTitle";
import { MY_PLANTS } from "../mocks/MyPlants";
import { Plant } from "shared/types/Plant";
import { Box } from "@mui/material";
import MyPlantsContent from "features/MyPlants/MyPlants";
import LOCALE from "shared/utils/Locale";

type MyPlantsProps = {}

const MyPlants: FC<MyPlantsProps> = props => {
    const SUBTITLE = LOCALE.formatString(LOCALE.myPlants.subtitle, MY_PLANTS.total) as string;

    return (
        <>
            <PageTitle title={LOCALE.myPlants.title} subtitle={SUBTITLE} />
            <Box component="main">
                <MyPlantsContent plants={MY_PLANTS.data as Plant[]} />
            </Box>
        </>
    )
}

export default MyPlants;
