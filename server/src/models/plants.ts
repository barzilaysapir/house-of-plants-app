import axios from "axios";
import { BASE_URL } from "utils/consts";
// import { PlantsRes } from "../../../../shared/plants";
// import { PlantRes } from "../../../../shared/plant";

const plantsAPI = `${BASE_URL}/plants`;

export const getAllPlants = async (): Promise<any | null> => {
    const response = await axios.get(plantsAPI);
    return response.data.data;
};

export const getPlantsSearch = async (q: string): Promise<any | null> => {
    const response = await axios.get(plantsAPI, {
        params: {
            q,
        },
    });
    return response.data.data;
};
