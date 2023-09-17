import { Card, CardActionArea } from "@mui/material";
import { FC } from "react";
import { Plant } from "shared/types/Plant";
import PlantCardContent from "./components/PlantCardContent";
import PlantCardImage from "./components/PlantCardImage";

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
            <CardActionArea sx={{
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                flexDirection: horizontal ? "row" : "column"
            }}>
                <PlantCardImage image={default_image.thumbnail} />
                <PlantCardContent title={primary_name} subtitle={scientific_name[0]} />
            </CardActionArea>
        </Card >
    )
}


export default PlantCard;

