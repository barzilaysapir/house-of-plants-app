import { ButtonProps } from "@mui/material";
import { Plant } from "./plants";
import { ReactElement } from "react";

export enum MyPlantsToolbarTab {
    PLANTS = "Plants",
    SITES = "Sites",
}

export type MenuOption = {
    name: string;
    to?: string | null;
    onClick?: () => void;
    icon?: ReactElement;
};

export type MyPlantsOutletContext = {
    plants: Plant[];
    loadingPlants: boolean;
    handleOpen: () => void;
};
