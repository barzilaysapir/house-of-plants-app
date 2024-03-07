import { Plant } from "shared/types/plants";

export enum AddPlantField {
    SPECIES = "species",
}

export type AddSiteData = {
    [AddPlantField.SPECIES]: Plant;
};
