import { FC } from "react";
import EmptyState from "components/EmptyState";
import i18n from "config/locales/i18n";
import { useOutletContext } from "react-router";
import { MyPlantsOutletContext } from "shared/types/UI";
import useCardsView from "shared/hooks/useCardsView";
import useMyPlants from "features/MyPlants/PlantsTab/usePlantsTab";
import PlantsList from "./PlantsList/PlantsList";
import PlantsToolbar from "./PlantsToolbar/PlantsToolbar";
import Loader from "components/Loader/Loader";

const PlantsTab: FC = () => {
    const { plants, loadingPlants, handleOpen } =
        useOutletContext<MyPlantsOutletContext>();

    const { view, onChangeView } = useCardsView();

    const { onSearchPlant, filteredPlants } = useMyPlants({
        plants,
    });

    const getPlantsTabContent = () => {
        if (loadingPlants || !filteredPlants) return <Loader />;

        if (plants.length === 0 || filteredPlants.length === 0)
            return (
                <EmptyState
                    handleOpen={handleOpen}
                    callToAction={{
                        label: i18n.t(
                            !plants.length
                                ? "myPlants.plants.emptyState"
                                : "myPlants.filteredPlants.emptyState"
                        ),
                    }}
                />
            );

        return <PlantsList view={view} filteredPlants={filteredPlants} />;
    };

    return (
        <>
            <PlantsToolbar
                onSearchPlant={onSearchPlant}
                onChangeView={onChangeView}
                view={view}
            />
            {getPlantsTabContent()}
        </>
    );
};

export default PlantsTab;
