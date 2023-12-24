import { ButtonProps } from "@mui/material";
import { Plant } from "./plants";

export type CallToAction = ButtonProps & {
    label: string;
};

export type MenuOption = {
    name: string;
    to: string | null;
    icon?: JSX.Element;
};

export type MyPlantsOutletContext = {
    plants: Plant[];
    handleOpen: () => void;
};
