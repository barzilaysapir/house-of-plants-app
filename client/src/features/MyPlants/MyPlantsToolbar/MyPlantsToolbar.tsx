import { Stack, Tab, Tabs } from "@mui/material";
import { ChangeEvent, FC, MouseEvent } from "react";
import SearchInput from "./SearchInput";
import ViewPicker from "./ViewPicker";
import { CardView } from "shared/types/card";
import useActiveDevice from "shared/hooks/useActiveDevice";
import { Link, useLocation } from "react-router-dom";
import { MyPlantsRoute } from "shared/types/route";
import i18n from "config/locales/i18n";

const TABS = [
    { name: i18n.t("myPlants.tabs.plants"), path: MyPlantsRoute.PLANTS },
    { name: i18n.t("myPlants.tabs.sites"), path: MyPlantsRoute.SITES },
];

type MyPlantsProps = {
    onSearchPlant: (event: ChangeEvent<HTMLInputElement>) => void;
    view: CardView;
    onChangeView: (event: MouseEvent<HTMLElement>, newView: CardView) => void;
};

const MyPlantsToolbar: FC<MyPlantsProps> = (props) => {
    const { onSearchPlant, view, onChangeView } = props;

    const path = useLocation().pathname.split("/")[2];
    const { isMobile } = useActiveDevice();

    const currentTab = path ? `/${path}` : MyPlantsRoute.PLANTS;

    return (
        <Stack direction="column" spacing={1}>
            <Stack direction="row" alignItems="center" spacing={2}>
                <SearchInput onSearchPlant={onSearchPlant} />
                <ViewPicker view={view} onChangeView={onChangeView} />
            </Stack>

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
        </Stack>
    );
};

export default MyPlantsToolbar;
