import { Plant } from "./plants";

export enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    NOT_AVAILABLE = "N/A",
}

export type User = {
    id: number;
    name: string;
    gender: Gender;
    email: string;
    image: string;
    plants: Plant[];
};

// enum Title {
//     NEW = "New Plant Parent",
//     PLANT_PERSON = "Plant Lady/Gentalman/Person",
//     JUNGLE_OWENER = "Jungle Owner",
// }
