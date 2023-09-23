export interface TrefleSpecies {
    data: Datum[];
    links: OutputLinks;
    meta: Meta;
}

export interface Datum {
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
    links: DatumLinks;
}

export interface DatumLinks {
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

export interface OutputLinks {
    self: string;
    first: string;
    next: string;
    last: string;
}

export interface Meta {
    total: number;
}
