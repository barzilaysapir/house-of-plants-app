import { Chip, ClickAwayListener, Stack, Tooltip } from "@mui/material";
import { FC } from "react";
import { PlantCareInfo } from "shared/types/Plants";
import useToggleDisplay from "shared/hooks/useToggleDisplay";
import { InfoOutlined } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

type RoutineDataChipProps = {
    info: PlantCareInfo;
};

const RoutineDataChip: FC<RoutineDataChipProps> = (props) => {
    const { info } = props;
    const { isOpen, toggle, handleClose } = useToggleDisplay();
    const { t } = useTranslation("", { keyPrefix: info });

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Tooltip title={t("data")} open={isOpen} arrow>
                <Chip
                    onClick={toggle}
                    label={
                        <Stack direction="row" alignItems="center" gap={1}>
                            {t("title")}
                            <InfoOutlined fontSize="small" color="primary" />
                        </Stack>
                    }
                    variant="filled"
                    clickable
                />
            </Tooltip>
        </ClickAwayListener>
    );
};

export default RoutineDataChip;
