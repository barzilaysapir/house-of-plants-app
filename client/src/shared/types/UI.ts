import { ButtonProps } from "@mui/material";
import { Plant } from "./plants";

export type CallToAction = ButtonProps & {
    label: string;
};

export enum MyPlantsToolbarTab {
    PLANTS = "Plants",
    SITES = "Sites",
}

export type MenuOption = {
    name: string;
    to: string | null;
    icon?: JSX.Element;
};

export type MyPlantsOutletContext = {
    plants: Plant[];
    loadingPlants: boolean;
    handleOpen: () => void;
};
