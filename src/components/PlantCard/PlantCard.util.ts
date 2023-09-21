import { Face2, WaterDrop, Sanitizer } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";
import i18n from "config/i18n/i18n";
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
        color: "secondary",
        Icon: Face2,
    },
];
