import { FC } from "react";
import EmptyState from "components/EmptyState";
import i18n from "config/locales/i18n";
import { useOutletContext } from "react-router";
import { MyPlantsOutletContext } from "shared/types/UI";
import useCardsView from "shared/hooks/useCardsView";
import useMyPlants from "pages/MyPlants/useMyPlants";
import PlantsList from "./PlantsList/PlantsList";
import PlantsToolbar from "./PlantsToolbar/PlantsToolbar";

const PlantsTab: FC = () => {
    const { plants, handleOpen } = useOutletContext<MyPlantsOutletContext>();

    const { view, onChangeView } = useCardsView();

    const { onSearchPlant, filteredPlants } = useMyPlants({
        plants,
    });

    return (
        <>
            <PlantsToolbar
                onSearchPlant={onSearchPlant}
                onChangeView={onChangeView}
                view={view}
            />

            {filteredPlants.length ? (
                <PlantsList filteredPlants={filteredPlants} view={view} />
            ) : (
                <EmptyState
                    handleOpen={handleOpen}
                    callToAction={{ label: i18n.t("myPlants.emptyState") }}
                />
            )}
        </>
    );
};

export default PlantsTab;
