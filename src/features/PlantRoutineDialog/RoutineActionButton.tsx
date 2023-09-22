import { FC } from "react";
import i18n from "i18next";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";
import { RoutineAction } from "./PlantRoutineDialog.util";

type RoutineActionButtonProps = Pick<
    LoadingButtonProps,
    "variant" | "endIcon"
> & {
    label: RoutineAction;
    handleClick: (clickedButton: RoutineAction) => Promise<void>;
    loadingBtnName: RoutineAction | null;
    count: number;
};

const RoutineActionButton: FC<RoutineActionButtonProps> = (props) => {
    const { label, variant, endIcon, loadingBtnName, handleClick, count } =
        props;

    return (
        <LoadingButton
            loadingPosition="end"
            variant={variant}
            endIcon={endIcon}
            onClick={() => handleClick(label)}
            loading={loadingBtnName === label}
            disabled={Boolean(loadingBtnName)}
            fullWidth
        >
            {i18n.t(label, { count })}
        </LoadingButton>
    );
};

export default RoutineActionButton;
