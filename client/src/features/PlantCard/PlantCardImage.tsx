import { FC } from "react";
import { StyledCardMedia, StyledPlantCardImage } from "./PlantCard.style";
import { PlantImageSize } from "shared/types/plantCard";

type PlantCardImageProps = {
    image: string;
    size: PlantImageSize;
};

const PlantCardImage: FC<PlantCardImageProps> = (props) => {
    const { image, size } = props;

    return (
        <StyledPlantCardImage size={size}>
            <StyledCardMedia component="img" image={image} />
        </StyledPlantCardImage>
    );
};

export default PlantCardImage;
