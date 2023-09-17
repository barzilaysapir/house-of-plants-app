import { Box, CardMedia } from "@mui/material";
import { FC } from "react";

type PlantCardImageProps = {
    image: string;
}

const PlantCardImage: FC<PlantCardImageProps> = (props) => {
    const { image } = props;

    return (
        <Box sx={{ borderRadius: "inherit" }} >
            <CardMedia
                sx={{ borderRadius: "inherit" }}
                component="img"
                height={100}
                image={image}
            />
        </Box>
    )
}


export default PlantCardImage;

