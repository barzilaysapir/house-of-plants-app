import { useState, ChangeEvent } from "react";
import { Plant } from "shared/types/Plants";

type UseMyPlantsListProps = {
    plants: Plant[]
}

const useMyPlants = (props: UseMyPlantsListProps) => {
    const { plants } = props;
    const [filteredPlants, setFilteredPlants] = useState<Plant[]>(plants);

    const onSearchPlant = (event: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value;
        const filteredPlants = plants.filter(({ primary_name, common_name, scientific_name }) => {
            const names = [primary_name, common_name, ...scientific_name].map(name => name.toLowerCase())
            return names.some(name => name.includes(searchTerm.toLowerCase()))
        })
        setFilteredPlants(filteredPlants);
    }

    return {
        onSearchPlant,
        filteredPlants,
    };
};


export default useMyPlants;
