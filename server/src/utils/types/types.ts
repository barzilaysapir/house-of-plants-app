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
    commonName: string;
    scientificName: string;
    image: string;
    care: PlantCare;
};

export type PlantsData = {
    total: number;
    data: Plant[];
};

export interface SpeciesRes {
    data: SpecieLight[];
    links: SpeciesLinks;
    meta: SpecieMeta;
}

export interface SpecieLight {
    id: number;
    common_name: string | null;
    slug: string;
    scientific_name: string;
    year: number | null;
    bibliography: string | null;
    author: string | null;
    status: Status;
    rank: Rank;
    family_common_name: string | null;
    genus_id: number;
    image_url: string | null;
    synonyms: string[] | null;
    genus: string;
    family: string;
    links: SpecieLinks;
}

export interface SpecieLinks {
    self: string;
    plant: string;
    genus: string;
}

export enum Rank {
    Species = "species",
    Subspecies = "ssp",
    Variety = "var",
    Form = "form",
    Hybrid = "hybrid",
    Subvariety = "subvar",
}

export enum Status {
    Accepted = "accepted",
    Unknown = "unknown",
}

export interface SpeciesLinks {
    self: string;
    first?: string;
    next?: string;
    prev?: string;
    last?: string;
}

export interface SpecieMeta {
    total: number;
}
