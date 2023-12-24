import {
    Preview,
    Edit,
    LocationCity,
    Notifications,
    Info,
    AddAPhoto,
} from "@mui/icons-material";
import i18n from "config/locales/i18n";
import { MenuOption } from "shared/types/UI";

export const MENU_OPTIONS: MenuOption[] = [
    {
        name: i18n.t("plantMenu.preview"),
        link: "/preview",
        icon: <Preview />,
    },
    {
        name: i18n.t("plantMenu.editPlant"),
        link: "/edit",
        icon: <Edit />,
    },
    {
        name: i18n.t("plantMenu.uploadPhoto"),
        link: "/photo",
        icon: <AddAPhoto />,
    },
    {
        name: i18n.t("plantMenu.changeSite"),
        link: "/edit/site",
        icon: <LocationCity />,
    },
    {
        name: i18n.t("plantMenu.reminders"),
        link: "/edit/reminders",
        icon: <Notifications />,
    },
    {
        name: i18n.t("plantMenu.specieInfo"),
        link: "/specie",
        icon: <Info />,
    },
];
