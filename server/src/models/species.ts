import axios from "axios";
import { BASE_URL, TREFLE_TOKEN } from "utils/consts";
// import { SpeciesRes } from "../../../shared/types/API/species";
// import { SpecieRes } from "../../../shared/types/API/specie";

const speciesAPI = `${BASE_URL}/species`;

export const getAllSpecies = async (): Promise<any | null> => {
    const response = await axios.get(speciesAPI, {
        params: {
            token: TREFLE_TOKEN,
        },
    });
    const data: any = response.data;
    console.log(data);
    return response.data.data;
};

export const getSpeciesById = async (id: number): Promise<any | null> => {
    const response = await axios.get(`${BASE_URL}}/species/${id}`, {
        params: {
            token: TREFLE_TOKEN,
        },
    });
    return response.data.data;
};

export const getSpeciesSearch = async (q: string): Promise<any | null> => {
    const response = await axios.get(`${speciesAPI}/search`, {
        params: {
            token: TREFLE_TOKEN,
            q,
        },
    });
    return response.data.data;
};
