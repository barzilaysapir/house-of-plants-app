import { Plant } from "./plants";
import { Site } from "./sites";

export enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    NOT_AVAILABLE = "N/A",
}

export type User = {
    id: number;
    name: string;
    picture: string;
    email: string;
    gender: Gender;
    plants: Plant[];
    sites: Site[];
};

// enum Title {
//     NEW = "New Plant Parent",
//     PLANT_PERSON = "Plant Lady/Gentalman/Person",
//     JUNGLE_OWENER = "Jungle Owner",
// }
