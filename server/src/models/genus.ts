import axios from "axios";

const genusAPI = `${Bun.env.BASE_URL}/genus`;
const token = Bun.env.TREFLE_TOKEN;

export const getAllGenuses = async (): Promise<any | null> => {
    const response = await axios.get(genusAPI, {
        params: {
            token,
        },
    });
    return response.data.data;
};

export const getGenusById = async (id: number): Promise<any | null> => {
    const response = await axios.get(`${genusAPI}/${id}`, {
        params: {
            token,
        },
    });
    return response.data.data;
};

export const getGenusesSearch = async (q: string): Promise<any | null> => {
    const response = await axios.get(`${genusAPI}/search`, {
        params: {
            token,
            q,
        },
    });
    return response.data.data;
};
