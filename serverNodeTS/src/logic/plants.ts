import { getAllPlants, getPlantsSearch } from "models/plants";

export const fetchAllPlants = async () => {
    return await getAllPlants();
};

export const fetchPlantsSearch = async (query: string) => {
    return await getPlantsSearch(query);
};
