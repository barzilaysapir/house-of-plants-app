import { Box, Tab, Tabs } from "@mui/material";
import { FC } from "react";
import useActiveDevice from "shared/hooks/useActiveDevice";
import { Link, useLocation } from "react-router-dom";
import { MyPlantsRoute } from "shared/types/route";
import i18n from "config/locales/i18n";

const TABS = [
    { name: i18n.t("myPlants.tabs.plants"), path: MyPlantsRoute.PLANTS },
    { name: i18n.t("myPlants.tabs.sites"), path: MyPlantsRoute.SITES },
];

const MyPlantsTabs: FC = () => {
    const path = useLocation().pathname.split("/")[2];
    const { isMobile } = useActiveDevice();

    const currentTab = path ? `/${path}` : MyPlantsRoute.PLANTS;

    return (
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
                value={currentTab}
                variant={isMobile ? "fullWidth" : "standard"}
                aria-label={i18n.t("myPlants.tabs.aria")}
                centered
            >
                {TABS.map(({ name, path }) => (
                    <Tab
                        key={name}
                        to={"." + path}
                        label={name}
                        component={Link}
                        value={path}
                    />
                ))}
            </Tabs>
        </Box>
    );
};

export default MyPlantsTabs;
