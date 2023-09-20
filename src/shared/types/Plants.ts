// enum PlantCycle {
//     PERENNIAL = "Perennial",
// }

// enum PlantWatering {
//     FREQUENT = "Frequent",
// }

// enum PlantSunlight {
//     FULL_SUN = "Full Sun",
//     PART_SHADE = "Part Shade",
// }

export enum PlantCareRoutine {
    WATER = "water",
    FERTILIZE = "fertilize",
    MIST = "mist",
}

export type PlantCareRoutineInfo = {
    freq: number;
    next: number;
};

export type PlantCareRoutines = {
    [key in PlantCareRoutine]: PlantCareRoutineInfo;
};

export type Plant = {
    id: number;
    primary_name: string;
    common_name: string;
    scientific_name: string[];
    // other_name: string[];
    // cycle: PlantCycle.PERENNIAL;
    // watering: PlantWatering.FREQUENT;
    // sunlight: PlantSunlight[];
    default_image: {
        thumbnail: string;
    };
    care: PlantCareRoutines;
};

export type PlantsData = {
    total: number,
    data: Plant[],
}
