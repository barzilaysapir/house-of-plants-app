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
import { PlantSettingsRoute } from "shared/types/route";

export const MENU_OPTIONS: MenuOption[] = [
    {
        name: i18n.t("plantMenu.preview"),
        to: PlantSettingsRoute.PREVIEW,
        icon: <Preview />,
    },
    {
        name: i18n.t("plantMenu.editPlant"),
        to: PlantSettingsRoute.EDIT,
        icon: <Edit />,
    },
    {
        name: i18n.t("plantMenu.uploadPhoto"),
        to: null,
        icon: <AddAPhoto />,
    },
    {
        name: i18n.t("plantMenu.changeSite"),
        to: null,
        icon: <LocationCity />,
    },
    {
        name: i18n.t("plantMenu.reminders"),
        to: PlantSettingsRoute.EDIT_REMINDERS,
        icon: <Notifications />,
    },
    {
        name: i18n.t("plantMenu.speciesInfo"),
        to: PlantSettingsRoute.SPECIES,
        icon: <Info />,
    },
];
