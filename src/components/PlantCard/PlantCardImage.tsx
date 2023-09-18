import { FC } from "react";
import { StyledCardMedia, StyledPlantCardImage } from "./style";

type PlantCardImageProps = {
    image: string;
}

const PlantCardImage: FC<PlantCardImageProps> = (props) => {
    const { image } = props;

    return (
        <StyledPlantCardImage>
            <StyledCardMedia
                component="img"
                image={image}
            />
        </StyledPlantCardImage>
    )
}


export default PlantCardImage;

