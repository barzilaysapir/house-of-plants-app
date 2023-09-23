// quicktype your-sample.json --lang csharp -o output.cs

export interface TrefleSpecies {
    data: Specie[];
    links: SpeciesLinks;
    meta: SpecieMeta;
}

export interface Specie {
    id: number;
    common_name: string;
    slug: string;
    scientific_name: string;
    year: number;
    bibliography: string;
    author: string;
    status: Status;
    rank: Rank;
    family_common_name: null | string;
    genus_id: number;
    image_url: string;
    synonyms: string[];
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
}

export enum Status {
    Accepted = "accepted",
}

export interface SpeciesLinks {
    self: string;
    first: string;
    next: string;
    last: string;
}

export interface SpecieMeta {
    total: number;
}
