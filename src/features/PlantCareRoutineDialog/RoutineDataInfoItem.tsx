import { Chip, ClickAwayListener, Tooltip } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import { PlantCareRoutineInfo } from "shared/types/Plants";

type RoutineDataInfoItemProps = {
    info: PlantCareRoutineInfo;
};

const RoutineDataInfoItem: FC<RoutineDataInfoItemProps> = (props) => {
    const { info } = props;

    const { t } = useTranslation();
    const { isOpen, toggle, handleClose } = useToggleDisplay();

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Tooltip title={t(`${info}.data`)} open={isOpen} arrow>
                <Chip
                    onClick={toggle}
                    label={t(`${info}.title`)}
                    variant="filled"
                    clickable
                />
            </Tooltip>
        </ClickAwayListener>
    );
};

export default RoutineDataInfoItem;
