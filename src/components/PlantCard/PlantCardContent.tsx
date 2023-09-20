import { Box, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import { StyledPlantCardContent } from "./PlantCard.style";
import { CARD_CARE_ROUTINES } from "./PlantCard.util";
import { PlantCareRoutine, PlantCareRoutines } from "shared/types/Plants";
import PlantCareRoutineButton from "./PlantCareRoutineButton/PlantCareRoutineButton";

type PlantCardContentProps = {
    title: string;
    subtitle: string;
    handleCareRoutineClick: (routine: PlantCareRoutine) => void;
    care: PlantCareRoutines;
};

const PlantCardContent: FC<PlantCardContentProps> = (props) => {
    const { title, subtitle, care, ...buttonsProps } = props;

    return (
        <StyledPlantCardContent>
            <Stack direction="column" rowGap={1} justifyContent="space-between">
                <Box>
                    <Typography variant="body1" component="h2" fontWeight={600}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        {subtitle}
                    </Typography>
                </Box>

                <Divider />

                {/* replace marginTop with "auto" */}
                <Stack
                    direction="row"
                    justifyContent="center"
                    gap={2}
                    marginTop={1.5}
                >
                    {CARD_CARE_ROUTINES.map((routineButton, index) => (
                        <PlantCareRoutineButton
                            key={index}
                            {...routineButton}
                            {...care[routineButton.id]}
                            {...buttonsProps}
                        />
                    ))}
                </Stack>
            </Stack>
        </StyledPlantCardContent>
    );
};

export default PlantCardContent;
