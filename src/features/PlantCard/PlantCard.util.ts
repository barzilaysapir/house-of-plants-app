import { Face2, WaterDrop, Sanitizer } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";
import { PlantCareRoutine } from "shared/types/Plants";

export type PlantRoutine = {
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
        color: "secondary",
        Icon: Face2,
    },
];
