import { FC } from "react";
import { StyledCardMedia, StyledPlantCardImage } from "./PlantCard.style";
import { PlantImageSize } from "shared/types/plantCard";
import { CardActionArea } from "@mui/material";

type PlantCardImageProps = {
    image: string;
    size: PlantImageSize;
    onClick: () => void;
};

const PlantCardImage: FC<PlantCardImageProps> = (props) => {
    const { image, size, onClick } = props;

    return (
        <StyledPlantCardImage size={size}>
            <CardActionArea onClick={onClick}>
                <StyledCardMedia component="img" image={image} />
            </CardActionArea>
        </StyledPlantCardImage>
    );
};

export default PlantCardImage;
