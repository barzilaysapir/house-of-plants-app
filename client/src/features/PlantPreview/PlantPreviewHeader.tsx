import { Box } from "@mui/material";
import { FC } from "react";
import { Plant } from "shared/types/plants";
import {
    StyledPlantImage,
    StyledPreviewPageHeader,
} from "./PlantPreview.style";

type PlantPreviewHeaderProps = Pick<
    Plant,
    "image" | "primaryName" | "secondaryName"
> & {
    handleImageLoaded: () => void;
};

const PlantPreviewHeader: FC<PlantPreviewHeaderProps> = (props) => {
    const { image, primaryName, secondaryName, handleImageLoaded } = props;

    return (
        <Box position="relative">
            <StyledPlantImage
                src={image}
                alt={primaryName}
                onLoad={handleImageLoaded}
            />
            <StyledPreviewPageHeader title={secondaryName} />
        </Box>
    );
};

export default PlantPreviewHeader;
