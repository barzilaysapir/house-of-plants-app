import { Edit, Notifications, Preview } from "@mui/icons-material";
import { MenuOption } from "shared/types/UI";

export const MENU_OPTIONS: MenuOption[] = [
    {
        name: "Preview",
        link: "/preview",
        icon: <Preview />,
    },
    {
        name: "Edit Site",
        link: "/edit",
        icon: <Edit />,
    },
    // {
    //     name: "Change Site",
    //     link: "/edit/site",
    //     icon: <LocationCity />,
    // },
    {
        name: "Reminders",
        link: "/edit/reminders",
        icon: <Notifications />,
    },
    // {
    //     name: "Specie Info",
    //     link: "/specie",
    //     icon: <Info />,
    // },
];
