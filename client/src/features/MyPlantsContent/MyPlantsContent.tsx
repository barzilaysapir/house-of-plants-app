import MyPlantsList from "features/MyPlantsList/MyPlantsList";
import MySitesList from "features/MySitesList/MySitesList";
import { MyPlantsToolbarTab, Plant } from "shared/types/plants";
import { CardView } from "shared/types/card";
import EmptyState from "components/EmptyState";
import i18n from "i18next";
import { FC } from "react";
import { Site } from "shared/types/sites";

type MyPlantsContentProps = {
    view: CardView;
    tab: MyPlantsToolbarTab;
    plants: Plant[];
    sites: Site[];
    handleOpen: () => void;
};

const MyPlantsContent: FC<MyPlantsContentProps> = (props) => {
    const { view, tab, plants, sites, handleOpen } = props;

    switch (tab) {
        case MyPlantsToolbarTab.PLANTS:
            return plants.length ? (
                <MyPlantsList filteredPlants={plants} view={view} />
            ) : (
                <EmptyState
                    handleOpen={handleOpen}
                    callToAction={i18n.t("myPlants.emptyState")}
                />
            );
        case MyPlantsToolbarTab.SITES:
            return sites.length ? (
                <MySitesList sites={sites} view={view} />
            ) : (
                <EmptyState
                    handleOpen={handleOpen}
                    callToAction={i18n.t("myPlants.sites.emptyState")}
                />
            );
        default:
            return null;
    }
};

export default MyPlantsContent;
