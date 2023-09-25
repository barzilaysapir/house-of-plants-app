import { Divider, Stack } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { StyledPlantCardContent } from "../PlantCard.style";
import { Plant } from "shared/types/Plants";
import PlantNames from "./PlantNames";

type PlantCardContentProps = {
    plant: Plant;
    children?: ReactNode;
};

const PlantCardContent: FC<PlantCardContentProps> = (props) => {
    const {
        plant: { primaryName, scientificName },
        children,
    } = props;

    return (
        <StyledPlantCardContent>
            <Stack direction="column" rowGap={1} justifyContent="space-between">
                <PlantNames name={primaryName} anotherName={scientificName} />
                {children && (
                    <>
                        <Divider />
                        {children}
                    </>
                )}
            </Stack>
        </StyledPlantCardContent>
    );
};

export default PlantCardContent;
