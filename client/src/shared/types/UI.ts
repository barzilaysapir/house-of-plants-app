import { ButtonProps } from "@mui/material";

export type CallToAction = ButtonProps & {
    label: string;
};

export enum MyPlantsToolbarTab {
    PLANTS = "Plants",
    SITES = "Sites",
}
