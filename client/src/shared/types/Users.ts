export enum Gender {
    MALE = "Male",
    FEMALE = "Female",
    NOT_AVAILABLE = "N/A",
}

export type User = {
    id: number,
    name: string,
    initials: string,
    gender: Gender,
    email: string,
    image: string,
    title: string, // save on DB or get by condition?
}

// enum Title {
//     NEW = "New Plant Parent",
//     PLANT_PERSON = "Plant Lady/Gentalman/Person",
//     JUNGLE_OWENER = "Jungle Owner",
// }
