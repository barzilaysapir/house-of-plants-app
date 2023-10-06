import axios from "axios";
import { Plant } from "utils/types/plants";
import { SpecieLight } from "utils/types/species";

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
        const data: Plant[] = result.data.data.map((specie: SpecieLight) => ({
            id: specie.id,
            primaryName: specie.scientific_name[0],
            secondaryName: specie.common_name,
            scientificName: specie.scientific_name[0],
            image: specie.default_image?.thumbnail,
        }));
        return data;
    } catch (error) {
        throw error;
    }
};
