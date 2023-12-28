import { AddAPhoto, Edit, Notifications, Preview } from "@mui/icons-material";
import i18n from "config/locales/i18n";
import { MenuOption } from "shared/types/UI";

export const MENU_OPTIONS: MenuOption[] = [
    {
        name: i18n.t("siteMenu.preview"),
        to: "/preview",
        icon: <Preview />,
    },
    {
        name: i18n.t("siteMenu.editSite"),
        to: "/edit",
        icon: <Edit />,
    },
    {
        name: i18n.t("siteMenu.uploadPhoto"),
        to: "/photo",
        icon: <AddAPhoto />,
    },
    {
        name: i18n.t("siteMenu.reminders"),
        to: "/edit/reminders",
        icon: <Notifications />,
    },
];
