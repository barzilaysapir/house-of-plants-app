import {
    Science,
    WaterDrop,
    Sanitizer,
    Edit,
    Info,
    LocationCity,
    Preview,
    Notifications,
} from "@mui/icons-material";
import { IconButtonProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";
import { MenuOption } from "shared/types/UI";
import { PlantCareRoutine } from "shared/types/plants";

export type PlantRoutine = Pick<IconButtonProps, "color"> & {
    id: PlantCareRoutine;
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
};

export const PLANT_ROUTINES: PlantRoutine[] = [
    {
        id: PlantCareRoutine.WATER,
        label: "water",
        color: "info",
        Icon: WaterDrop,
    },
    {
        id: PlantCareRoutine.FERTILIZE,
        label: "fertilize",
        color: "success",
        Icon: Sanitizer,
    },
    {
        id: PlantCareRoutine.MIST,
        label: "mist",
        color: "error",
        Icon: Science,
    },
];

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
