import {
    Preview,
    Edit,
    LocationCity,
    Notifications,
    Info,
    AddAPhoto,
} from "@mui/icons-material";
import { MenuOption } from "shared/types/UI";

export const MENU_OPTIONS: MenuOption[] = [
    {
        name: "Preview",
        link: "/preview",
        icon: <Preview />,
    },
    {
        name: "Edit Plant",
        link: "/edit",
        icon: <Edit />,
    },
    {
        name: "Upload Photo",
        link: "/upload",
        icon: <AddAPhoto />,
    },
    {
        name: "Change Site",
        link: "/edit/site",
        icon: <LocationCity />,
    },
    {
        name: "Reminders",
        link: "/edit/reminders",
        icon: <Notifications />,
    },
    {
        name: "Specie Info",
        link: "/specie",
        icon: <Info />,
    },
];
