import { Typography } from "@mui/material";
import { FC } from "react";
import { StyledPlantCardContent } from "./PlantCard.style";

type PlantCardContentProps = {
    title: string,
    subtitle: string
};

const PlantCardContent: FC<PlantCardContentProps> = (props) => {
    const { title, subtitle } = props;

    return (
        <StyledPlantCardContent>
            <Typography variant="body1" component="h2" fontWeight={600}>
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {subtitle}
            </Typography>
        </StyledPlantCardContent>
    )
}


export default PlantCardContent;

