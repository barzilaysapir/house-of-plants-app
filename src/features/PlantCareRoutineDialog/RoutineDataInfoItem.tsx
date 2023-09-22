import { Chip, ClickAwayListener, Tooltip } from "@mui/material";
import { FC } from "react";
import i18n from "i18next";
import { PlantCareRoutineInfo } from "shared/types/Plants";
import useToggleDisplay from "shared/hooks/useToggleDisplay";

type RoutineDataInfoItemProps = {
    info: PlantCareRoutineInfo;
};

const RoutineDataInfoItem: FC<RoutineDataInfoItemProps> = (props) => {
    const { info } = props;
    const { isOpen, toggle, handleClose } = useToggleDisplay();

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Tooltip title={i18n.t(`${info}.data`)} open={isOpen} arrow>
                <Chip
                    onClick={toggle}
                    label={i18n.t(`${info}.title`)}
                    variant="filled"
                    clickable
                />
            </Tooltip>
        </ClickAwayListener>
    );
};

export default RoutineDataInfoItem;
