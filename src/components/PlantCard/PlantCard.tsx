import { Card } from "@mui/material";
import { FC } from "react";
import { Plant } from "shared/types/Plants";
import PlantCardContent from "./PlantCardContent";
import PlantCardImage from "./PlantCardImage";
import { StyledCardActionArea } from "./PlantCard.style";

type PlantCardProps = Plant & {
    horizontal?: boolean;
};

const PlantCard: FC<PlantCardProps> = (props) => {
    const { horizontal = false, primary_name, scientific_name, default_image } = props;

    return (
        <Card sx={{
            padding: 1,
            borderRadius: 3,
            boxShadow: "0px 0px 10px rgb(173 173 173 / 20%)",
        }}>
            <StyledCardActionArea horizontal={+horizontal}>
                <PlantCardImage image={default_image.thumbnail} />
                <PlantCardContent title={primary_name} subtitle={scientific_name[0]} />
            </StyledCardActionArea>
        </Card >
    )
}


export default PlantCard;

