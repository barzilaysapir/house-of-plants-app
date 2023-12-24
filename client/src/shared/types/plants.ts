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
    id: string;
    primaryName: string;
    secondaryName: string;
    scientificName: string;
    thumbnail: string;
    image: string;
    site: string | undefined;
    care?: PlantCare;
};

export type PlantsData = {
    total: number;
    data: Plant[];
};
