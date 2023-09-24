// To parse this data:
//
//   import { Convert, Specie } from "./file";
//
//   const specie = Convert.toSpecie(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface SpecieRes {
    data: Specie;
    meta: Meta;
}

export interface Specie {
    id: number;
    common_name: null;
    slug: string;
    scientific_name: string;
    year: null;
    bibliography: string;
    author: string;
    status: string;
    rank: string;
    family_common_name: null;
    genus_id: number;
    observations: null;
    vegetable: null;
    image_url: null;
    genus: string;
    family: string;
    duration: null;
    edible_part: null;
    edible: null;
    images: CommonNames;
    common_names: CommonNames;
    distribution: CommonNames;
    distributions: CommonNames;
    flower: Flower;
    foliage: Foliage;
    fruit_or_seed: FruitOrSeed;
    sources: Source[];
    specifications: Specifications;
    synonyms: any[];
    growth: Growth;
    links: Links;
}

export interface CommonNames {}

export interface Flower {
    color: null;
    conspicuous: null;
}

export interface Foliage {
    texture: null;
    color: null;
    leaf_retention: null;
}

export interface FruitOrSeed {
    conspicuous: null;
    color: null;
    shape: null;
    seed_persistence: null;
}

export interface Growth {
    description: null;
    sowing: null;
    days_to_harvest: null;
    row_spacing: MinimumRootDepth;
    spread: MinimumRootDepth;
    ph_maximum: null;
    ph_minimum: null;
    light: null;
    atmospheric_humidity: null;
    growth_months: null;
    bloom_months: null;
    fruit_months: null;
    minimum_precipitation: ImumPrecipitation;
    maximum_precipitation: ImumPrecipitation;
    minimum_root_depth: MinimumRootDepth;
    minimum_temperature: ImumTemperature;
    maximum_temperature: ImumTemperature;
    soil_nutriments: null;
    soil_salinity: null;
    soil_texture: null;
    soil_humidity: null;
}

export interface ImumPrecipitation {
    mm: null;
}

export interface ImumTemperature {
    deg_f: null;
    deg_c: null;
}

export interface MinimumRootDepth {
    cm: null;
}

export interface Links {
    self: string;
    plant: string;
    genus: string;
}

export interface Source {
    last_update: Date;
    id: string;
    name: string;
    url: null;
    citation: null;
}

export interface Specifications {
    ligneous_type: null;
    growth_form: null;
    growth_habit: null;
    growth_rate: null;
    average_height: MinimumRootDepth;
    maximum_height: MinimumRootDepth;
    nitrogen_fixation: null;
    shape_and_orientation: null;
    toxicity: null;
}

export interface Meta {
    images_count: number;
    sources_count: number;
    synonyms_count: number;
    last_modified: Date;
}
