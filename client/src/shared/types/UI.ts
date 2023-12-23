import { ButtonProps } from "@mui/material";

export type CallToAction = ButtonProps & {
    label: string;
};

export enum MyPlantsToolbarTab {
    PLANTS = "Plants",
    SITES = "Sites",
}

export type MenuOption = {
    name: string;
    link: string;
    icon?: JSX.Element;
};
