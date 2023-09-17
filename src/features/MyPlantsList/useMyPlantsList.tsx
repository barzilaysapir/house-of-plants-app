import { useState, ChangeEvent } from "react";
import { Plant } from "shared/types";

type UseMyPlantsListProps = {
    plants: Plant[]
}

const useMyPlantsList = (props: UseMyPlantsListProps) => {
    const { plants } = props;
    const [filteredPlants, setFilteredPlants] = useState<Plant[]>(plants);

    const onSearchPlant = (event: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        const filteredPlants = plants.filter((plant) => {
            return plant.primary_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                plant.scientific_name.some((sc_name) => sc_name.toLowerCase().includes(searchTerm.toLowerCase()))
        })
        setFilteredPlants(filteredPlants);
    }

    return {
        onSearchPlant,
        filteredPlants,
    }
}


export default useMyPlantsList;
