import { FC } from "react";
import PageTitle from "components/PageTitle";
import { myPlantsMock } from "./MyPlants.mock";
import { Plant } from "shared/types";
import { Box, Container } from "@mui/material";
import MyPlantsList from "features/MyPlantsList/MyPlantsList";

type MyPlantsProps = {}

const MyPlants: FC<MyPlantsProps> = props => {
    const { } = props;

    const subTitle = `${myPlantsMock.total} plants in my collection`;

    return (
        <Box>
            <PageTitle title="My Plants" subtitle={subTitle} />
            <MyPlantsList plants={myPlantsMock.data as Plant[]} />
        </Box>
    )
}

export default MyPlants;
