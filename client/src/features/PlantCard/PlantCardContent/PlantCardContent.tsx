import { Divider, Stack } from "@mui/material";
import { FC } from "react";
import { StyledPlantCardContent } from "../PlantCard.style";
import { Plant } from "shared/types/Plants";
import PlantNames from "./PlantNames";
import PlantRoutines from "./PlantRoutines";

type PlantCardContentProps = {
    plant: Plant;
};

const PlantCardContent: FC<PlantCardContentProps> = (props) => {
    const {
        plant: { primary_name, scientific_name, care },
    } = props;

    return (
        <StyledPlantCardContent>
            <Stack direction="column" rowGap={1} justifyContent="space-between">
                <PlantNames name={primary_name} moreNames={scientific_name} />
                <Divider />
                <PlantRoutines name={primary_name} care={care} />
            </Stack>
        </StyledPlantCardContent>
    );
};

export default PlantCardContent;
