import axios from "axios";
import { BASE_URL } from "utils/consts";
// import { SpeciesRes } from "../../../shared/types/API/species";
// import { SpecieRes } from "../../../shared/types/API/specie";

const speciesAPI = `${BASE_URL}/species`;

export const getAllSpecies = async (): Promise<any | null> => {
    const response = await axios.get(speciesAPI);
    const data: any = response.data;

    console.log(data);

    return response.data.data;
};

export const getSpeciesById = async (id: number): Promise<any | null> => {
    const response = await axios.get(speciesAPI, {
        params: {
            id,
        },
    });
    return response.data.data;
};

export const getSpeciesSearch = async (q: string): Promise<any | null> => {
    const response = await axios.get(speciesAPI, {
        params: {
            q,
        },
    });
    return response.data.data;
};
