import axios from "axios";
import { Plant } from "utils/types/plants";
import { SpeciesLight } from "utils/types/species";

const speciesAPI = `${Bun.env.BASE_URL}/species`;
const key = Bun.env.API_TOKEN;

export const getSpeciesById = async (id: number): Promise<any | null> => {
    try {
        const result = await axios.get(`${speciesAPI}/details/${id}`, {
            params: {
                key,
            },
        });
        return result.data;
    } catch (error) {
        throw error;
    }
};

export const searchSpecies = async (q: string): Promise<Plant[]> => {
    try {
        const result = await axios.get(`${speciesAPI}-list`, {
            params: {
                key,
                q,
            },
        });
        const data: Plant[] = result.data.data.map((species: SpeciesLight) => ({
            id: species.id,
            primaryName: species.scientific_name[0],
            secondaryName: species.common_name,
            scientificName: species.scientific_name[0],
            image: species.default_image?.thumbnail,
        }));
        return data;
    } catch (error) {
        throw error;
    }
};
