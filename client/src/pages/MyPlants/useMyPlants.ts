import { useState, ChangeEvent, useEffect } from "react";
import { Plant } from "shared/types/plants";

type UseMyPlantsListProps = {
    plants: Plant[];
};

const useMyPlants = (props: UseMyPlantsListProps) => {
    const { plants } = props;

    const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);

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

    return {
        onSearchPlant,
        filteredPlants,
    };
};

export default useMyPlants;
