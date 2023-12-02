import { Plant } from "shared/types/plants";

export enum AddPlantField {
    SPECIE = "specie",
    SOIL = "soil",
}

export enum SoilType {
    LIGHT = "light", // 0 - fast-draining soil
    MEDIUM = "medium", // 1
    HEAVY = "heavy", // 2 - slow-draining soil
    SEMI_HYDRO = "semiHydro",
    HYDRO = "hydro",
}

export type AddPlantData = {
    [AddPlantField.SPECIE]: Plant;
    [AddPlantField.SOIL]: SoilType;
};
