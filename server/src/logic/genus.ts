import { getAllGenuses, getGenusById, getGenusesSearch } from "models/genus";

export const fetchAllGenuses = async () => {
    return await getAllGenuses();
};

export const fetchGenusById = async (id: number) => {
    return await getGenusById(id);
};

export const fetchGenusesSearch = async (query: string) => {
    return await getGenusesSearch(query);
};
