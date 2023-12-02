import { Plant } from "shared/types/plants";

export enum AddPlantField {
    SPECIE = "specie",
}

export type AddPlantData = {
    [AddPlantField.SPECIE]: Plant;
};
