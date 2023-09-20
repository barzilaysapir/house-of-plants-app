import { FC, useState } from "react";
import PageHeader from "components/PageHeader/PageHeader";
import { PlantsData, Plant } from "shared/types/Plants";
import { Box } from "@mui/material";
import MyPlantsContent from "features/MyPlants/MyPlants";
import LOCALE from "config/locale/Locale";
import AddIcon from '@mui/icons-material/Add';
import AddPlantDialog from "features/AddPlantDialog/AddPlantDialog";
import { useLoaderData } from "react-router";

type MyPlantsProps = {}

const MyPlants: FC<MyPlantsProps> = props => {
    const [open, setOpen] = useState<boolean>(false);
    const myPlants = useLoaderData() as PlantsData;

    const SUBTITLE = LOCALE.formatString(LOCALE.myPlants.subtitle, myPlants.total) as string;

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <PageHeader title={LOCALE.myPlants.title} subtitle={SUBTITLE}
                callToAction={{
                    endIcon: <AddIcon sx={{ marginInlineStart: 1 }} />,
                    onClick: handleClickOpen,
                    label: LOCALE.myPlants.addButton
                }} />

            <Box component="main">
                <MyPlantsContent plants={myPlants.data as Plant[]} />
                <AddPlantDialog open={open} handleClose={handleClose} />
            </Box>
        </>
    )
}

export default MyPlants;
