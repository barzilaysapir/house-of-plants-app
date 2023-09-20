import { Box, CircularProgress, Divider, IconButton, Stack, Tooltip, Typography } from "@mui/material";
import { FC } from "react";
import { StyledPlantCardContent } from "./PlantCard.style";
import { CARD_BUTTONS } from "./PlantCard.util";
import { Plant } from "shared/types/Plants";

type PlantCardContentProps = {
    title: string,
    subtitle: string
} & Pick<Plant, "water_freq" | "water_next">;

const PlantCardContent: FC<PlantCardContentProps> = (props) => {
    const { title, subtitle, water_freq, water_next } = props;

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

                <Stack direction="row" justifyContent="space-evenly">
                    {CARD_BUTTONS.map(({ label, Icon, color }, index) =>
                        <Tooltip key={index} title={label} enterTouchDelay={0}>
                            <IconButton aria-label={label} color={water_next === 0 ? "error" : color}>
                                <CircularProgress
                                    variant="determinate"
                                    value={water_next / water_freq * 100}
                                    sx={{ position: "absolute" }}
                                    color="inherit"
                                    thickness={2}
                                />
                                <Icon />
                            </IconButton>
                        </Tooltip>
                    )}
                </Stack>

            </Stack>
        </StyledPlantCardContent>
    );
};


export default PlantCardContent;
