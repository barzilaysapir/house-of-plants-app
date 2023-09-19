import { FC, useState } from "react";
import PageHeader from "components/PageHeader/component";
import { MY_PLANTS } from "../mocks/MyPlants";
import { Plant } from "shared/types/Plants";
import { Box } from "@mui/material";
import MyPlantsContent from "features/MyPlants/component";
import LOCALE from "locale/Locale";
import AddIcon from '@mui/icons-material/Add';
import AddPlantDialog from "features/AddPlantDialog/component";

type MyPlantsProps = {}

const MyPlants: FC<MyPlantsProps> = props => {
    const [open, setOpen] = useState<boolean>(false);
    const SUBTITLE = LOCALE.formatString(LOCALE.myPlants.subtitle, MY_PLANTS.total) as string;

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
                <MyPlantsContent plants={MY_PLANTS.data as Plant[]} />
                <AddPlantDialog open={open} handleClose={handleClose} />
            </Box>
        </>
    )
}

export default MyPlants;
