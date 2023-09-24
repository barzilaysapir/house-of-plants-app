import { FC } from "react";
import { StyledCardMedia, StyledPlantCardImage } from "./PlantCard.style";
import { CardImageSize } from "./PlantCard.util";

type PlantCardImageProps = {
    image: string;
    size: CardImageSize;
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
