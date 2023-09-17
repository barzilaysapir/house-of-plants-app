import { Box, CardMedia } from "@mui/material";
import { FC } from "react";
import { Plant } from "shared/types/Plant";

type PlantCardImageProps = Pick<Plant, "common_name" | "default_image">;

const PlantCardImage: FC<PlantCardImageProps> = (props) => {
    const { common_name, default_image } = props;

    return (
        <Box sx={{ borderRadius: "inherit" }} >
            <CardMedia
                sx={{ borderRadius: "inherit" }}
                component="img"
                height={100}
                image={default_image.medium_url}
                alt={`${common_name[0]} image`}
            />
        </Box>
    )
}


export default PlantCardImage;

