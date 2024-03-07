import { Plant } from "shared/types/Plants";

const MY_PLANTS_DATA: Plant[] = [
    {
        id: 1,
        primaryName: "Snake Plant",
        commonName: "Snake Plant 1",
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
        image: 
                "https://mybageecha.com/cdn/shop/products/Laurentii_2_1024x.jpg?v=1657969100",
    },
    {
        id: 2,
        primaryName: "Nanuk",
        commonName: "Wandering Jew 2",
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
        image: 
                "https://www.mydomaine.com/thmb/a-yj-6mfrISRxpWEpiyq2ro6DhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tradescantia-nanouk-plant-care-7ccdc22c1e714cf78f5cd0472d4211ae.jpeg",
    },
    {
        id: 3,
        primaryName: "Monsty",
        commonName: "Swiss Cheese Plant",
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
        image: 
                "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTxTh3nXLhaZ_HZFLOmkqj9tXb-WTcVjX_8NqKQ0pKWNs50nFF8I_uwye6NaqeWZyXWwpiUqzEVqI-xdEc",
    },
    {
        id: 5,
        primaryName: "Custom name 5",
        commonName: "Snake Plant 5",
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
        image: 
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4WH0OVgYwZGEIuMH1EmW-k-5AnACmi_kFw&usqp=CAU",
    },
    // {
    //     id: 6,
    //     primaryName: "Custom name 6",
    //     commonName: "Wandering Jew 6",
    //     scientificName: "Tradescantia-nanouk",
    //     care: {
    //         water: {
    // info: [],
    //             freq: 10,
    //             next: 7,
    //         },
    //         fertilize: {
    // info: [],
    //             freq: 10,
    // last: 20,
    //             next: 7,
    //         },
    //         mist: {
    // info: [],
    //             freq: 10,
    // last: 8,
    //             next: 7,
    //         },
    //     },
    //     image: 
    //             "https://www.mydomaine.com/thmb/a-yj-6mfrISRxpWEpiyq2ro6DhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tradescantia-nanouk-plant-care-7ccdc22c1e714cf78f5cd0472d4211ae.jpeg",
    //     },
    // },
    // {
    //     id: 7,
    //     primaryName: "Custom name 7",
    //     commonName: "Snake Plant 7",
    //     scientificName: "Sansevieria Trifasciata Laurentii",
    //     care: {
    //         water: {
    // info: ["limeSensitive"],
    //             freq: 5,
    //             next: 0,
    //         },
    //         fertilize: {
    // info: [],
    //             freq: 30,
    // last: 20,
    //             next: 17,
    //         },
    //         mist: {
    // info: [],
    //             freq: -1,
    // last: 8,
    //             next: -1,
    //         },
    //     },
    //     image: 
    //             "https://mybageecha.com/cdn/shop/products/Laurentii_2_1024x.jpg?v=1657969100",
    //     },
    // },
    // {
    //     id: 8,
    //     primaryName: "Custom name 8",
    //     commonName: "Wandering Jew 8",
    //     scientificName: "Tradescantia-nanouk",
    //     care: {
    //         water: {
    // info: ["limeSensitive"],
    //             freq: 10,
    //             next: 7,
    //         },
    //         fertilize: {
    // info: [],
    //             freq: 10,
    // last: 20,
    //             next: 7,
    //         },
    //         mist: {
    // info: [],
    //             freq: 10,
    // last: 8,
    //             next: 7,
    //         },
    //     },
    //     image: 
    //             "https://www.mydomaine.com/thmb/a-yj-6mfrISRxpWEpiyq2ro6DhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tradescantia-nanouk-plant-care-7ccdc22c1e714cf78f5cd0472d4211ae.jpeg",
    //     },
    // },
    // {
    //     id: 9,
    //     primaryName: "Custom name 9",
    //     commonName: "Snake Plant 9",
    //     scientificName: "Sansevieria Trifasciata Laurentii",
    //     care: {
    //         water: {
    // info: ["limeSensitive"],
    //             freq: 5,
    //             next: 0,
    //         },
    //         fertilize: {
    // info: [],
    //             freq: 30,
    // last: 20,
    //             next: 17,
    //         },
    //         mist: {
    // info: [],
    //             freq: -1,
    // last: 8,
    //             next: -1,
    //         },
    //     },
    //     image: 
    //             "https://mybageecha.com/cdn/shop/products/Laurentii_2_1024x.jpg?v=1657969100",
    //     },
    // },
    // {
    //     id: 10,
    //     primaryName: "Custom name 0",
    //     commonName: "Wandering Jew 10",
    //     scientificName: "Tradescantia-nanouk",
    //     care: {
    //         water: {
    // info: ["limeSensitive"],
    //             freq: 10,
    //             next: 7,
    //         },
    //         fertilize: {
    // info: [],
    //             freq: 10,
    // last: 20,
    //             next: 7,
    //         },
    //         mist: {
    // info: [],
    //             freq: 10,
    // last: 8,
    //             next: 7,
    //         },
    //     },
    //     image: 
    //             "https://www.mydomaine.com/thmb/a-yj-6mfrISRxpWEpiyq2ro6DhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tradescantia-nanouk-plant-care-7ccdc22c1e714cf78f5cd0472d4211ae.jpeg",
    //     },
    // },
    // {
    //     id: 11,
    //     primaryName: "Custom name 1",
    //     commonName: "Snake Plant 11",
    //     scientificName: "Sansevieria Trifasciata Laurentii",
    //     care: {
    //         water: {
    // info: ["limeSensitive"],
    //             freq: 5,
    // last: 8,        
    // next: 1,
    //         },
    //         fertilize: {
    // info: [],
    //             freq: 30,
    // last: 20,
    //             next: 17,
    //         },
    //         mist: {
    // info: [],
    //             freq: -1,
    // last: 8,
    //             next: -1,
    //         },
    //     },
    //     image: 
    //             "https://mybageecha.com/cdn/shop/products/Laurentii_2_1024x.jpg?v=1657969100",
    //     },
    // },
    // {
    //     id: 4,
    //     primaryName: "ננוק",
    //     commonName: "Wandering Jew 4",
    //     scientificName: "Tradescantia-nanouk",
    //     care: {
    //         water: {
    // info: ["limeSensitive"],
    //             freq: 10,
    //             next: 7,
    //         },
    //         fertilize: {
    // info: [],
    //             freq: 10,
    // last: 20,
    //             next: 7,
    //         },
    //         mist: {
    // info: [],
    //             freq: 10,
    // last: 8,
    //             next: 7,
    //         },
    //     },
    //     image: 
    //             "https://www.mydomaine.com/thmb/a-yj-6mfrISRxpWEpiyq2ro6DhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tradescantia-nanouk-plant-care-7ccdc22c1e714cf78f5cd0472d4211ae.jpeg",
    //     },
    // },
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
