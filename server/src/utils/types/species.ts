export type SpeciesRes = {
    data: SpeciesLight[];
    to: number;
    per_page: number;
    current_page: number;
    from: number;
    last_page: number;
    total: number;
};

enum Cycle {
    PERENNIAL = "perennial",
    ANNUAL = "annual",
    BIENNIAL = "biennial",
    BIANNUAL = "biannual",
}

enum Watering {
    FREQUENT = "frequent",
    AVERAGE = "average",
    MINIMUM = "minimum",
    NONE = "none",
}

enum Sunlight {
    FULL_SHADE = "full_shade",
    PART_SHADE = "part_shade",
    FULL_SUN = "full_sun",
    PART_SUN = "sun-part_shade",
}

export type SpeciesLight = {
    id: number;
    common_name: string;
    scientific_name: string[];
    other_name: string[] | null;
    cycle: Cycle;
    watering: Watering;
    sunlight: Sunlight[];
    default_image: DefaultImage;
};

export type DefaultImage = {
    image_id: number;
    license: number;
    license_name: string;
    license_url: string;
    original_url: string;
    regular_url: string;
    medium_url: string;
    small_url: string;
    thumbnail: string;
};
