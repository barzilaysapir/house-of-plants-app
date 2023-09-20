import { Plant } from "shared/types/Plants";

const MY_PLANTS_DATA: Plant[] = [
    {
        id: 1,
        primary_name: "Snake Plant",
        common_name: "Snake Plant 1",
        scientific_name: ["Sansevieria Trifasciata Laurentii"],
        care: {
            water: {
                freq: 5,
                next: 1,
            },
            fertilize: {
                freq: 30,
                next: 17,
            },
            mist: {
                freq: -1,
                next: -1,
            },
        },
        default_image: {
            thumbnail:
                "https://mybageecha.com/cdn/shop/products/Laurentii_2_1024x.jpg?v=1657969100",
        },
    },
    {
        id: 2,
        primary_name: "Nanuk",
        common_name: "Wandering Jew 2",
        scientific_name: ["Tradescantia-nanouk"],
        care: {
            water: {
                freq: 10,
                next: 7,
            },
            fertilize: {
                freq: 10,
                next: 7,
            },
            mist: {
                freq: 10,
                next: 7,
            },
        },
        default_image: {
            thumbnail:
                "https://www.mydomaine.com/thmb/a-yj-6mfrISRxpWEpiyq2ro6DhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tradescantia-nanouk-plant-care-7ccdc22c1e714cf78f5cd0472d4211ae.jpeg",
        },
    },
    {
        id: 3,
        primary_name: "Monsty",
        common_name: "Swiss Cheese Plant",
        scientific_name: ["Monstera Minima"],
        care: {
            water: {
                freq: 5,
                next: 1,
            },
            fertilize: {
                freq: 5,
                next: 1,
            },
            mist: {
                freq: 5,
                next: 1,
            },
        },
        default_image: {
            thumbnail:
                "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTxTh3nXLhaZ_HZFLOmkqj9tXb-WTcVjX_8NqKQ0pKWNs50nFF8I_uwye6NaqeWZyXWwpiUqzEVqI-xdEc",
        },
    },
    {
        id: 5,
        primary_name: "Custom name 5",
        common_name: "Snake Plant 5",
        scientific_name: ["Sansevieria Trifasciata Laurentii"],
        care: {
            water: {
                freq: 5,
                next: 1,
            },
            fertilize: {
                freq: 30,
                next: 17,
            },
            mist: {
                freq: -1,
                next: -1,
            },
        },
        default_image: {
            thumbnail:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL4WH0OVgYwZGEIuMH1EmW-k-5AnACmi_kFw&usqp=CAU",
        },
    },
    // {
    //     id: 6,
    //     primary_name: "Custom name 6",
    //     common_name: "Wandering Jew 6",
    //     scientific_name: ["Tradescantia-nanouk"],
    //     care: {
    //         water: {
    //             freq: 10,
    //             next: 7,
    //         },
    //         fertilize: {
    //             freq: 10,
    //             next: 7,
    //         },
    //         mist: {
    //             freq: 10,
    //             next: 7,
    //         },
    //     },
    //     default_image: {
    //         thumbnail:
    //             "https://www.mydomaine.com/thmb/a-yj-6mfrISRxpWEpiyq2ro6DhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tradescantia-nanouk-plant-care-7ccdc22c1e714cf78f5cd0472d4211ae.jpeg",
    //     },
    // },
    // {
    //     id: 7,
    //     primary_name: "Custom name 7",
    //     common_name: "Snake Plant 7",
    //     scientific_name: ["Sansevieria Trifasciata Laurentii"],
    //     care: {
    //         water: {
    //             freq: 5,
    //             next: 0,
    //         },
    //         fertilize: {
    //             freq: 30,
    //             next: 17,
    //         },
    //         mist: {
    //             freq: -1,
    //             next: -1,
    //         },
    //     },
    //     default_image: {
    //         thumbnail:
    //             "https://mybageecha.com/cdn/shop/products/Laurentii_2_1024x.jpg?v=1657969100",
    //     },
    // },
    // {
    //     id: 8,
    //     primary_name: "Custom name 8",
    //     common_name: "Wandering Jew 8",
    //     scientific_name: ["Tradescantia-nanouk"],
    //     care: {
    //         water: {
    //             freq: 10,
    //             next: 7,
    //         },
    //         fertilize: {
    //             freq: 10,
    //             next: 7,
    //         },
    //         mist: {
    //             freq: 10,
    //             next: 7,
    //         },
    //     },
    //     default_image: {
    //         thumbnail:
    //             "https://www.mydomaine.com/thmb/a-yj-6mfrISRxpWEpiyq2ro6DhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tradescantia-nanouk-plant-care-7ccdc22c1e714cf78f5cd0472d4211ae.jpeg",
    //     },
    // },
    // {
    //     id: 9,
    //     primary_name: "Custom name 9",
    //     common_name: "Snake Plant 9",
    //     scientific_name: ["Sansevieria Trifasciata Laurentii"],
    //     care: {
    //         water: {
    //             freq: 5,
    //             next: 0,
    //         },
    //         fertilize: {
    //             freq: 30,
    //             next: 17,
    //         },
    //         mist: {
    //             freq: -1,
    //             next: -1,
    //         },
    //     },
    //     default_image: {
    //         thumbnail:
    //             "https://mybageecha.com/cdn/shop/products/Laurentii_2_1024x.jpg?v=1657969100",
    //     },
    // },
    // {
    //     id: 10,
    //     primary_name: "Custom name 0",
    //     common_name: "Wandering Jew 10",
    //     scientific_name: ["Tradescantia-nanouk"],
    //     care: {
    //         water: {
    //             freq: 10,
    //             next: 7,
    //         },
    //         fertilize: {
    //             freq: 10,
    //             next: 7,
    //         },
    //         mist: {
    //             freq: 10,
    //             next: 7,
    //         },
    //     },
    //     default_image: {
    //         thumbnail:
    //             "https://www.mydomaine.com/thmb/a-yj-6mfrISRxpWEpiyq2ro6DhM=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/tradescantia-nanouk-plant-care-7ccdc22c1e714cf78f5cd0472d4211ae.jpeg",
    //     },
    // },
    // {
    //     id: 11,
    //     primary_name: "Custom name 1",
    //     common_name: "Snake Plant 11",
    //     scientific_name: ["Sansevieria Trifasciata Laurentii"],
    //     care: {
    //         water: {
    //             freq: 5,
    //             next: 1,
    //         },
    //         fertilize: {
    //             freq: 30,
    //             next: 17,
    //         },
    //         mist: {
    //             freq: -1,
    //             next: -1,
    //         },
    //     },
    //     default_image: {
    //         thumbnail:
    //             "https://mybageecha.com/cdn/shop/products/Laurentii_2_1024x.jpg?v=1657969100",
    //     },
    // },
    // {
    //     id: 4,
    //     primary_name: "ננוק",
    //     common_name: "Wandering Jew 4",
    //     scientific_name: ["Tradescantia-nanouk"],
    //     care: {
    //         water: {
    //             freq: 10,
    //             next: 7,
    //         },
    //         fertilize: {
    //             freq: 10,
    //             next: 7,
    //         },
    //         mist: {
    //             freq: 10,
    //             next: 7,
    //         },
    //     },
    //     default_image: {
    //         thumbnail:
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
