import axios from "axios";
import { BASE_URL, TREFLE_TOKEN } from "utils/consts";
// import { GenusesRes } from "../../../../shared/genuses";
// import { GenusRes } from "../../../../shared/genus";

const genusAPI = `${BASE_URL}/genus`;

export const getAllGenuses = async (): Promise<any | null> => {
    const response = await axios.get(genusAPI, {
        params: {
            token: TREFLE_TOKEN,
        },
    });
    return response.data.data;
};

export const getGenusById = async (id: number): Promise<any | null> => {
    const response = await axios.get(`${genusAPI}/${id}`, {
        params: {
            token: TREFLE_TOKEN,
        },
    });
    return response.data.data;
};

export const getGenusesSearch = async (q: string): Promise<any | null> => {
    const response = await axios.get(`${genusAPI}/search`, {
        params: {
            token: TREFLE_TOKEN,
            q,
        },
    });
    return response.data.data;
};
