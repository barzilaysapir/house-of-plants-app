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
    primary_name: string;
    common_name: string;
    scientific_name: string[];
    default_image: {
        thumbnail: string;
    };
    care: PlantCare;
};

export type PlantsData = {
    total: number,
    data: Plant[],
}