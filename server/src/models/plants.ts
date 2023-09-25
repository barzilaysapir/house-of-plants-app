import axios from "axios";

const plantsAPI = `${Bun.env.BASE_URL}/plants`;
const token = Bun.env.TREFLE_TOKEN;

export const getAllPlants = async (): Promise<any | null> => {
    const response = await axios.get(plantsAPI, {
        params: {
            token,
        },
    });
    return response.data.data;
};

export const getPlantsSearch = async (q: string): Promise<any | null> => {
    const response = await axios.get(`${plantsAPI}/search`, {
        params: {
            token,
            q,
        },
    });
    return response.data.data;
};
