enum PlantCycle {
    PERENNIAL = "Perennial",
}

enum PlantWatering {
    FREQUENT = "Frequent",
}

enum PlantSunlight {
    FULL_SUN = "Full Sun",
    PART_SHADE = "Part Shade",
}

export type Plant = {
    id: number,
    primary_name: string,
    common_name: string,
    scientific_name: string[],
    other_name: string[],
    cycle: PlantCycle.PERENNIAL,
    watering: PlantWatering.FREQUENT,
    sunlight: PlantSunlight[],
    default_image: {
        original_url: string,
        regular_url: string,
        medium_url: string,
        small_url: string,
        thumbnail: string,
    }
}
