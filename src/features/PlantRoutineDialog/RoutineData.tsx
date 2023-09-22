import { List, ListItem, ListItemText, Stack } from "@mui/material";
import { FC } from "react";
import { PlantCareRoutineData } from "shared/types/Plants";
import RoutineDataChip from "./RoutineDataChip";
import i18n from "i18next";

type RoutineDataProps = {
    routineData: PlantCareRoutineData;
};

const RoutineData: FC<RoutineDataProps> = (props) => {
    const { routineData } = props;

    return (
        <List>
            <ListItem>
                <ListItemText
                    primary={i18n.t("lastTime")}
                    secondary={i18n.t("xDaysAgo", {
                        count: routineData.last,
                    })}
                />
            </ListItem>

            <ListItem>
                <ListItemText
                    primary={i18n.t("nextTime")}
                    secondary={i18n.t("inXDays", {
                        count: routineData.next,
                    })}
                />
            </ListItem>

            <ListItem sx={{ paddingBlock: 2 }}>
                <Stack direction="row" spacing={2}>
                    {routineData.info.map((info, index) => (
                        <RoutineDataChip key={index} info={info} />
                    ))}
                </Stack>
            </ListItem>
        </List>
    );
};

export default RoutineData;
