import { PlantCare } from "shared/types/plants";
import ImagePolkaDot from "./images/PXL_20230920_102537694.jpg";
import ImageBirkin from "./images/PXL_20230924_095148382.jpg";
import ImageZZ from "./images/PXL_20230925_043336803.jpg";
import ImagePothos from "./images/PXL_20230927_094915861.jpg";

export const CARE: PlantCare = {
    fertilize: {
        freq: 5,
        next: 3,
        last: 2,
        info: [],
    },
    water: {
        freq: 5,
        next: 3,
        last: 2,
        info: [],
    },
    mist: {
        freq: 5,
        next: 3,
        last: 2,
        info: [],
    },
};

// Plant[]
const MY_PLANTS_DATA: any[] = [
    {
        id: "1",
        primaryName: "Snake Plant",
        secondaryName: "Snake Plant 1",
        scientificName: "Sansevieria Trifasciata Laurentii",
        care: {
            water: {
                info: ["limeSensitive", "likeToDry"],
                freq: 5,
                last: 8,
                next: 1,
            },
            fertilize: {
                info: [],
                freq: 30,
                last: 30,
                next: 0,
            },
            mist: {
                info: [],
                freq: -1,
                last: 8,
                next: -1,
            },
        },
        image: ImageBirkin,
    },
    {
        id: "2",
        primaryName: "Nanuk",
        secondaryName: "Wandering Jew 2",
        scientificName: "Tradescantia-nanouk",
        care: {
            water: {
                info: [],
                freq: 10,
                last: 8,
                next: 7,
            },
            fertilize: {
                info: [],
                freq: 10,
                last: 20,
                next: 7,
            },
            mist: {
                info: [],
                freq: 10,
                last: 8,
                next: 7,
            },
        },
        image: ImagePolkaDot,
    },
    {
        id: "3",
        primaryName: "Monsty",
        secondaryName: "Swiss Cheese Plant",
        scientificName: "Monstera Minima",
        care: {
            water: {
                info: ["limeSensitive"],
                freq: 5,
                last: 8,
                next: 1,
            },
            fertilize: {
                info: [],
                freq: 5,
                last: 20,
                next: 1,
            },
            mist: {
                info: [],
                freq: 5,
                last: 8,
                next: 1,
            },
        },
        image: ImagePothos,
    },
    {
        id: "5",
        primaryName: "Custom name 5",
        secondaryName: "Snake Plant 5",
        scientificName: "Sansevieria Trifasciata Laurentii",
        care: {
            water: {
                info: ["limeSensitive"],
                freq: 5,
                last: 8,
                next: 1,
            },
            fertilize: {
                info: [],
                freq: 30,
                last: 20,
                next: 17,
            },
            mist: {
                info: [],
                freq: -1,
                last: 8,
                next: -1,
            },
        },
        image: ImageZZ,
    },
];

export const MY_PLANTS = {
    data: MY_PLANTS_DATA,
    to: 60,
    per_page: 30,
    current_page: 2,
    from: 31,
    last_page: 337,
    total: 25,
};
