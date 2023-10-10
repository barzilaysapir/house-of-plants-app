import { FC, ReactNode } from "react";
import { Plant } from "shared/types/plants";
import PlantCardContent from "./PlantCardContent/PlantCardContent";
import PlantCardImage from "./PlantCardImage";
import StyledPlantCard from "./PlantCard.style";
import { PlantImageSize } from "shared/types/plantCard";
import useActiveDevice from "shared/hooks/useActiveDevice";

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

    const { isMobile } = useActiveDevice();
    const isGalleryView = isMobile && vertical; // mobile grid view

    return (
        <StyledPlantCard vertical={Number(vertical)}>
            <PlantCardImage
                image={plant.image}
                size={size}
                onClick={() => onClick(plant)}
            />
            {!isGalleryView && (
                <PlantCardContent plant={plant}>{children}</PlantCardContent>
            )}
        </StyledPlantCard>
    );
};

export default PlantCard;
