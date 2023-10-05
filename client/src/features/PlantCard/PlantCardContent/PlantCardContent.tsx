import { Divider, Stack } from "@mui/material";
import { FC, ReactNode } from "react";
import { StyledPlantCardContent } from "../PlantCard.style";
import { Plant } from "shared/types/plants";
import PlantNames from "./PlantNames";

type PlantCardContentProps = {
    plant: Plant;
    children?: ReactNode;
};

const PlantCardContent: FC<PlantCardContentProps> = (props) => {
    const {
        plant: { primaryName, secondaryName },
        children,
    } = props;

    return (
        <StyledPlantCardContent>
            <Stack direction="column" rowGap={1} height="100%">
                <PlantNames
                    primaryName={primaryName}
                    secondaryName={secondaryName}
                />
                {children && (
                    <>
                        <Divider sx={{ width: "100%", marginBlock: 1 }} />
                        {children}
                    </>
                )}
            </Stack>
        </StyledPlantCardContent>
    );
};

export default PlantCardContent;
