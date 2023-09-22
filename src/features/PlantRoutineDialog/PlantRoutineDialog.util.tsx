import { Check, Snooze } from "@mui/icons-material";
import { LoadingButtonProps } from "@mui/lab/LoadingButton";

export enum RoutineAction {
    COMPLETE = "complete",
    SNOOZE = "snooze",
}

type RoutineActionButton = LoadingButtonProps & {
    label: RoutineAction;
};

export const ROUTINE_ACTION_BUTTONS: RoutineActionButton[] = [
    {
        variant: "contained",
        label: RoutineAction.COMPLETE,
        endIcon: <Check />,
    },
    {
        label: RoutineAction.SNOOZE,
        endIcon: <Snooze />,
    },
];
