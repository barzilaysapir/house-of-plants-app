import { FC } from "react";
import PageTitle from "components/PageTitle";
import { MY_PLANTS } from "../mocks/MyPlants";
import { Plant } from "shared/types/Plant";
import { Box } from "@mui/material";
import MyPlantsList from "features/MyPlantsList/MyPlantsList";

type MyPlantsProps = {}

const MyPlants: FC<MyPlantsProps> = props => {
    const { } = props;

    const subTitle = `${MY_PLANTS.total} plants in my collection`;

    return (
        <Box>
            <PageTitle title="My Plants" subtitle={subTitle} />
            <main>
                <MyPlantsList plants={MY_PLANTS.data as Plant[]} />
            </main>
        </Box>
    )
}

export default MyPlants;
