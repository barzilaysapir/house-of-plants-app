import { Face2, WaterDrop, Sanitizer } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";
import LOCALE from "config/locale/Locale";
import { PlantCareRoutine } from "shared/types/Plants";

export type CardCareRoutine = {
    id: PlantCareRoutine;
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    color?:
        | "inherit"
        | "primary"
        | "secondary"
        | "error"
        | "info"
        | "success"
        | "warning";
};

export const CARD_CARE_ROUTINES: CardCareRoutine[] = [
    {
        id: PlantCareRoutine.WATER,
        label: LOCALE.water,
        color: "info",
        Icon: WaterDrop,
    },
    {
        id: PlantCareRoutine.FERTILIZE,
        label: LOCALE.fertilize,
        color: "success",
        Icon: Sanitizer,
    },
    {
        id: PlantCareRoutine.MIST,
        label: LOCALE.mist,
        color: "secondary",
        Icon: Face2,
    },
];
