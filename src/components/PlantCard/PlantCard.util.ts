import { Face2, WaterDrop, Sanitizer } from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";

type CardButton = {
    label: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    };
    color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
};

export const CARD_BUTTONS: CardButton[] = [
    {
        label: "Water",
        color: "info",
        Icon: WaterDrop,
    },
    {
        label: "Fertilize",
        color: "success",
        Icon: Sanitizer,
    },
    {
        label: "Mist",
        color: "warning",
        Icon: Face2,
    },
];
