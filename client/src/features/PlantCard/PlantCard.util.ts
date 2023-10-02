import { Science, WaterDrop, Sanitizer } from "@mui/icons-material";
import { IconButtonProps, SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";
import { PlantCareRoutine } from "shared/types/plants";

export type PlantRoutine = Pick<IconButtonProps, "color"> & {
    id: PlantCareRoutine;
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
};

export type CardImageSize = "small" | "medium" | "large";

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
