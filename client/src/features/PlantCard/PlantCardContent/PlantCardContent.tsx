import { Divider, Skeleton, Stack } from "@mui/material";
import { FC } from "react";
import { StyledPlantCardContent } from "../PlantCard.style";
import { Plant } from "shared/types/Plants";
import PlantNames from "./PlantNames";
import PlantRoutines from "./PlantRoutines";

type PlantCardContentProps = {
    plant: Plant;
    withRoutines: boolean;
};

const PlantCardContent: FC<PlantCardContentProps> = (props) => {
    const {
        plant: { primaryName, scientificName, care },
        withRoutines,
    } = props;

    return (
        <StyledPlantCardContent>
            <Stack direction="column" rowGap={1} justifyContent="space-between">
                <PlantNames name={primaryName} anotherName={scientificName} />
                {withRoutines && (
                    <>
                        <Divider />
                        <PlantRoutines name={primaryName} care={care} />
                    </>
                )}
            </Stack>
        </StyledPlantCardContent>
    );
};

export default PlantCardContent;
