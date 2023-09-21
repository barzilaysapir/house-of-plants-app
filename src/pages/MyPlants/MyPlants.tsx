import { FC, useState } from "react";
import PageHeader from "components/PageHeader/PageHeader";
import { PlantsData, Plant } from "shared/types/Plants";
import { Box } from "@mui/material";
import MyPlantsContent from "features/MyPlants/MyPlants";
import AddIcon from "@mui/icons-material/Add";
import AddPlantDialog from "features/AddPlantDialog/AddPlantDialog";
import { useLoaderData } from "react-router";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import { useTranslation } from "react-i18next";

type MyPlantsProps = {};

const MyPlants: FC<MyPlantsProps> = (props) => {
    const myPlants = useLoaderData() as PlantsData;

    const { t } = useTranslation();
    const { isOpen, handleOpen, handleClose } = useToggleDisplay();

    return (
        <>
            <PageHeader
                title={t("myPlants.title")}
                subtitle={t("myPlants.subtitle", { total: myPlants.total })}
                callToAction={{
                    endIcon: <AddIcon sx={{ marginInlineStart: 1 }} />,
                    onClick: handleOpen,
                    label: t("myPlants.addButton"),
                }}
            />

            <Box component="main">
                <MyPlantsContent plants={myPlants.data as Plant[]} />
                <AddPlantDialog open={isOpen} handleClose={handleClose} />
            </Box>
        </>
    );
};

export default MyPlants;
