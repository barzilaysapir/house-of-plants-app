import { FC, ReactNode } from "react";
import { Plant } from "shared/types/plants";
import PlantCardContent from "./PlantCardContent/PlantCardContent";
import PlantCardImage from "./PlantCardImage";
import StyledPlantCard, { StyledPlantCardButton } from "./PlantCard.style";
import { PlantImageSize } from "shared/types/plantCard";
import { useMediaQuery } from "@mui/material";
import theme from "config/theme";

type PlantCardProps = {
    plant: Plant;
    size?: PlantImageSize;
    vertical?: boolean;
    children?: ReactNode;
    onClick?: (plant: Plant) => void;
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const {
        plant,
        size = PlantImageSize.MEDIUM,
        vertical = false,
        children,
        onClick = () => null,
    } = props;

    const isGalleryView = // mobile grid view
        useMediaQuery(theme.breakpoints.down("sm")) && vertical;

    return (
        <StyledPlantCard>
            <StyledPlantCardButton
                vertical={Number(vertical)}
                onClick={() => onClick(plant)}
            >
                <>
                    <PlantCardImage image={plant.image} size={size} />
                    {!isGalleryView && (
                        <PlantCardContent plant={plant}>
                            {children}
                        </PlantCardContent>
                    )}
                </>
            </StyledPlantCardButton>
        </StyledPlantCard>
    );
};

export default PlantCard;
