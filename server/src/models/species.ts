import axios from "axios";
import { Plant, PlantCare, SpecieLight } from "utils/types/types";

const speciesAPI = `${Bun.env.BASE_URL}/species`;
const key = Bun.env.API_TOKEN;

export const getSpeciesById = async (id: number): Promise<any | null> => {
    const response = await axios.get(`${speciesAPI}/${id}`, {
        params: {
            key,
        },
    });
    return response.data.data;
};

export const searchSpecies = async (q: string): Promise<Plant[] | null> => {
    const response = await axios.get(`${speciesAPI}/search`, {
        params: {
            key,
            q,
        },
    });
    const data: Plant[] = response.data.data.map((specie: SpecieLight) => {
        return {
            id: specie.id,
            primaryName: specie.common_name || specie.scientific_name,
            secondaryName: specie.common_name || "",
            scientificName: specie.scientific_name || "",
            image: specie.image_url || "",
            care: {} as PlantCare,
        };
    });
    return data;
};
