import axios from "axios";
import { BASE_URL } from "utils/consts";
// import { GenusesRes } from "../../../../shared/genuses";
// import { GenusRes } from "../../../../shared/genus";

const genusesAPI = `${BASE_URL}/genus`;

export const getAllGenuses = async (): Promise<any | null> => {
    const response = await axios.get(genusesAPI);
    return response.data.data;
};

export const getGenusById = async (id: number): Promise<any | null> => {
    const response = await axios.get(genusesAPI, {
        params: {
            id,
        },
    });
    return response.data.data;
};

export const getGenusesSearch = async (q: string): Promise<any | null> => {
    const response = await axios.get(genusesAPI, {
        params: {
            q,
        },
    });
    return response.data.data;
};
