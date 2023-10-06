import * as Model from "models/species";

export const getSpeciesById = async (id: number) => {
    return await Model.getSpeciesById(id);
};

export const searchSpecies = async (query: string) => {
    return await Model.searchSpecies(query);
};
