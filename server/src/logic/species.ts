import {
    getAllSpecies,
    getSpeciesById,
    getSpeciesSearch,
} from "models/species";

export const fetchAllSpecies = async () => {
    return await getAllSpecies();
};

export const fetchSpeciesById = async (id: number) => {
    return await getSpeciesById(id);
};

export const fetchSpeciesSearch = async (query: string) => {
    return await getSpeciesSearch(query);
};
