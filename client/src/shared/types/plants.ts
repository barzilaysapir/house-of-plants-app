export enum PlantCareRoutine {
    WATER = "water",
    FERTILIZE = "fertilize",
    MIST = "mist",
}

export type PlantCareInfo = "limeSensitive" | "likeToDry";

export type PlantCareRoutineData = {
    freq: number;
    last: number;
    next: number;
    info: PlantCareInfo[];
};

export type PlantCare = {
    [key in PlantCareRoutine]: PlantCareRoutineData;
};

export type Plant = {
    id: number;
    primaryName: string;
    care: PlantCare;
    image: string;
    scientificName: string;
    commonName?: string;
};

export type PlantsData = {
    total: number;
    data: Plant[];
};
