import { AddAPhoto, Edit, Notifications, Preview } from "@mui/icons-material";
import i18n from "config/locales/i18n";
import { MenuOption } from "shared/types/UI";

export const MENU_OPTIONS: MenuOption[] = [
    {
        name: i18n.t("siteMenu.preview"),
        link: "/preview",
        icon: <Preview />,
    },
    {
        name: i18n.t("siteMenu.editSite"),
        link: "/edit",
        icon: <Edit />,
    },
    {
        name: i18n.t("siteMenu.uploadPhoto"),
        link: "/photo",
        icon: <AddAPhoto />,
    },
    {
        name: i18n.t("siteMenu.reminders"),
        link: "/edit/reminders",
        icon: <Notifications />,
    },
];
