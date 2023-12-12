import { Stack, Tab, Tabs } from "@mui/material";
import { ChangeEvent, FC, MouseEvent, SyntheticEvent } from "react";
import SearchInput from "./SearchInput";
import ViewPicker from "./ViewPicker";
import { CardView } from "shared/types/card";
import { MyPlantsToolbarTab } from "shared/types/UI";

const TABS = [MyPlantsToolbarTab.PLANTS, MyPlantsToolbarTab.SITES];

type MyPlantsProps = {
    onSearchPlant: (event: ChangeEvent<HTMLInputElement>) => void;
    view: CardView;
    onChangeView: (event: MouseEvent<HTMLElement>, newView: CardView) => void;
    currentTab: MyPlantsToolbarTab;
    handleTabChange: (
        event: SyntheticEvent,
        newTab: MyPlantsToolbarTab
    ) => void;
};

const MyPlantsToolbar: FC<MyPlantsProps> = (props) => {
    const { onSearchPlant, view, onChangeView, currentTab, handleTabChange } =
        props;

    return (
        <Stack direction="column" spacing={1}>
            <Stack direction="row" alignItems="center" spacing={2}>
                <SearchInput onSearchPlant={onSearchPlant} />
                <ViewPicker view={view} onChangeView={onChangeView} />
            </Stack>

            <Tabs
                value={currentTab}
                onChange={handleTabChange}
                variant="fullWidth"
                centered
            >
                {TABS.map((tab) => (
                    <Tab key={tab} value={tab} label={tab} />
                ))}
            </Tabs>
        </Stack>
    );
};

export default MyPlantsToolbar;
