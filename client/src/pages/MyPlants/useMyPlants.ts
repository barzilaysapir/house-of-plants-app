import { useState, ChangeEvent, useEffect, SyntheticEvent } from "react";
import { MyPlantsToolbarTab, Plant } from "shared/types/plants";

type UseMyPlantsListProps = {
    plants: Plant[];
};

const useMyPlants = (props: UseMyPlantsListProps) => {
    const { plants } = props;

    const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
    const [currentTab, setCurrentTab] = useState<MyPlantsToolbarTab>(
        MyPlantsToolbarTab.PLANTS
    );

    useEffect(() => {
        if (plants) setFilteredPlants(plants);
    }, [plants]);

    const onSearchPlant = (event: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        const filteredPlants = plants.filter(
            ({ primaryName, secondaryName, scientificName }) => {
                const names = [primaryName, secondaryName, scientificName].map(
                    (name) => name.toLowerCase()
                );
                return names.some((name) =>
                    name.includes(searchTerm.toLowerCase())
                );
            }
        );
        setFilteredPlants(filteredPlants);
    };

    const handleTabChange = (
        event: SyntheticEvent,
        selectedTab: MyPlantsToolbarTab
    ) => {
        setCurrentTab(selectedTab);
    };

    return {
        onSearchPlant,
        filteredPlants,
        currentTab,
        handleTabChange,
    };
};

export default useMyPlants;
