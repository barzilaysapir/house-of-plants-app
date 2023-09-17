import { CardContent, Typography } from "@mui/material";
import { FC } from "react";

type PlantCardContentProps = {
    title: string,
    subtitle: string
};

const PlantCardContent: FC<PlantCardContentProps> = (props) => {
    const { title, subtitle } = props;

    return (
        <CardContent sx={{ padding: "5px 10px" }}>
            <Typography variant="body1" component="h3" fontWeight={600}>
                {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {subtitle}
            </Typography>
        </CardContent>
    )
}


export default PlantCardContent;

