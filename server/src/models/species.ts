import axios from "axios";
import { BASE_URL, TREFLE_TOKEN } from "utils/consts";
// import { SpeciesRes } from "../../../shared/types/API/species";
// import { SpecieRes } from "../../../shared/types/API/specie";
import { Plant, PlantCare, SpecieLight } from "utils/types";

const speciesAPI = `${BASE_URL}/species`;

export const getAllSpecies = async (): Promise<any | null> => {
    const response = await axios.get(speciesAPI, {
        params: {
            token: TREFLE_TOKEN,
        },
    });
    return response.data.data;
};

export const getSpeciesById = async (id: number): Promise<any | null> => {
    const response = await axios.get(`${speciesAPI}/${id}`, {
        params: {
            token: TREFLE_TOKEN,
        },
    });
    return response.data.data;
};

export const getSpeciesSearch = async (q: string): Promise<Plant[] | null> => {
    const response = await axios.get(`${speciesAPI}/search`, {
        params: {
            token: TREFLE_TOKEN,
            q,
        },
    });
    const data: Plant[] = response.data.data.map((specie: SpecieLight) => {
        return {
            id: specie.id,
            primaryName: specie.common_name || specie.scientific_name,
            commonName: specie.common_name || "",
            scientificName: specie.scientific_name || "",
            image: specie.image_url || "",
            care: {} as PlantCare,
        };
    });
    return data;
};
