import axios from "axios";
import { Plant } from "utils/types/plants";
import { SpecieLight } from "utils/types/species";

const speciesAPI = `${Bun.env.BASE_URL}/species`;
const key = Bun.env.API_TOKEN;

export const getSpeciesById = async (id: number): Promise<any | null> => {
    const response = await axios.get(`${speciesAPI}/details/${id}`, {
        params: {
            key,
        },
    });
    return response.data;
};

export const searchSpecies = async (q: string): Promise<Plant[] | null> => {
    const response = await axios.get(`${speciesAPI}-list`, {
        params: {
            key,
            q,
        },
    });
    let data: Plant[] = response.data.data.map((specie: SpecieLight) => ({
        id: specie.id,
        primaryName: specie.scientific_name[0],
        secondaryName: specie.common_name,
        scientificName: specie.scientific_name[0],
        image: specie.default_image?.thumbnail,
    }));
    return data;
};
