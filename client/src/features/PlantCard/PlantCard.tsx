import { FC, ReactNode } from "react";
import { Plant } from "shared/types/plants";
import PlantCardContent from "./PlantCardContent/PlantCardContent";
import PlantCardImage from "./PlantCardImage";
import StyledPlantCard from "./PlantCard.style";
import { PlantImageSize } from "shared/types/plantCard";
import { useMediaQuery } from "@mui/material";
import theme from "config/theme";

type PlantCardProps = {
    plant: Plant;
    size?: PlantImageSize;
    vertical?: boolean;
    children?: ReactNode;
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const {
        plant,
        size = PlantImageSize.MEDIUM,
        vertical = false,
        children,
    } = props;

    const isGalleryView = // mobile grid view
        useMediaQuery(theme.breakpoints.down("sm")) && vertical;

    return (
        <StyledPlantCard
            elevation={1}
            sx={{
                padding: 1,
                borderRadius: 3,
            }}
            vertical={Number(vertical)}
        >
            <PlantCardImage image={plant.image} size={size} />
            {!isGalleryView && (
                <PlantCardContent plant={plant}>{children}</PlantCardContent>
            )}
        </StyledPlantCard>
    );
};

export default PlantCard;
