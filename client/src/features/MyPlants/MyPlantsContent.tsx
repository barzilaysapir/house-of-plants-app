// import MyPlantsList from "features/MyPlants/MyPlantsList/MyPlantsList";
// import MySitesList from "features/MyPlants/MySitesList/MySitesList";
import { Plant } from "shared/types/plants";
import { CardView } from "shared/types/card";
import EmptyState from "components/EmptyState";
import i18n from "i18next";
import { FC } from "react";
import { Site } from "shared/types/sites";
import { MyPlantsToolbarTab } from "shared/types/UI";

type MyPlantsContentProps = {
    view: CardView;
    tab: MyPlantsToolbarTab;
    plants: Plant[];
    sites: Site[];
    handleOpen: () => void;
};

const MyPlantsContent: FC<MyPlantsContentProps> = (props) => {
    const { view, tab, plants, sites, handleOpen } = props;

    // switch (tab) {
    //     case MyPlantsToolbarTab.PLANTS:
    //         return plants.length ? (
    //             <MyPlantsList filteredPlants={plants} view={view} />
    //         ) : (
    //             <EmptyState
    //                 handleOpen={handleOpen}
    //                 callToAction={{ label: i18n.t("myPlants.emptyState") }}
    //             />
    //         );
    //     case MyPlantsToolbarTab.SITES:
    //         return sites.length ? (
    //             <MySitesList sites={sites} view={view} />
    //         ) : (
    //             <EmptyState
    //                 handleOpen={handleOpen}
    //                 callToAction={{
    //                     label: i18n.t("myPlants.sites.emptyState"),
    //                 }}
    //             />
    //         );
    //     default:
    //         return null;
    // }
    return null;
};

export default MyPlantsContent;
