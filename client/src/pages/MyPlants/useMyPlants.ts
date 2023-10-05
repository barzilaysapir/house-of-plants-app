import { useState, ChangeEvent, useEffect } from "react";
import { Plant } from "shared/types/plants";

type UseMyPlantsListProps = {
    plants: any[];
};

const mappedPlants = (plants: any[]) =>
    plants.map((plant) => ({
        id: plant.id,
        // plantId: plant.plantId,
        primaryName: plant.name,
        care: {
            fertilize: plant.fertilize || "",
            water: plant.water || "",
            mist: plant.mist || "",
        },
        image: plant.image,
        scientificName: plant.another_name,
    }));

const useMyPlants = (props: UseMyPlantsListProps) => {
    const { plants } = props;

    const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);

    useEffect(() => {
        setFilteredPlants(mappedPlants(plants));
    }, [plants]);

    const onSearchPlant = (event: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        const filteredPlants = plants.filter(
            ({ primaryName, commonName, scientificName }) => {
                const names = [primaryName, commonName, scientificName].map(
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
