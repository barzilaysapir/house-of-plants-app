import { Container, List, ListItem, ListItemText, Stack } from "@mui/material";
import { FC } from "react";
import { PlantCareRoutineData } from "shared/types/Plants";
import RoutineDataInfoItem from "./RoutineDataInfoItem";
import { useTranslation } from "react-i18next";

type RoutineDataProps = {
    routineData: PlantCareRoutineData;
};

const RoutineData: FC<RoutineDataProps> = (props) => {
    const { routineData } = props;
    const { t } = useTranslation();

    return (
        <Container>
            <List
                sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                }}
            >
                <ListItem>
                    <ListItemText
                        primary={t("lastTime")}
                        secondary={t("xDaysAgo", {
                            count: routineData.last,
                        })}
                    />
                </ListItem>

                <ListItem>
                    <ListItemText
                        primary={t("nextTime")}
                        secondary={t("inXDays", {
                            count: routineData.next,
                        })}
                    />
                </ListItem>

                <ListItem sx={{ paddingBlock: 2 }}>
                    <Stack direction="row" spacing={2}>
                        {routineData.info.map((info, index) => (
                            <RoutineDataInfoItem key={index} info={info} />
                        ))}
                    </Stack>
                </ListItem>
            </List>
        </Container>
    );
};

export default RoutineData;
