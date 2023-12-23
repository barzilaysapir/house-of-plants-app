import { ButtonProps } from "@mui/material";
import { Plant } from "./plants";
import { CardView } from "./card";

export type CallToAction = ButtonProps & {
    label: string;
};

export type MenuOption = {
    name: string;
    link: string;
    icon?: JSX.Element;
};

export type MyPlantsOutletContext = {
    filteredPlants: Plant[];
    view: CardView;
    handleOpen: () => void;
};
