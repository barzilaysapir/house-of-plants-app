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
        link: "/addPhoto",
        icon: <AddAPhoto />,
    },
    {
        name: i18n.t("plantMenu.changeSite"),
        link: "/editSite",
        icon: <LocationCity />,
    },
    {
        name: i18n.t("plantMenu.reminders"),
        link: "/editReminders",
        icon: <Notifications />,
    },
    {
        name: i18n.t("plantMenu.speciesInfo"),
        link: "/species",
        icon: <Info />,
    },
];
