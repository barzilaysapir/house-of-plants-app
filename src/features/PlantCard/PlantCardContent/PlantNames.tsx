import { Box, Typography } from "@mui/material";
import { FC } from "react";

type PlantNamesProps = {
    name: string;
    moreNames: string[];
};

const PlantNames: FC<PlantNamesProps> = (props) => {
    const { name, moreNames } = props;

    return (
        <Box>
            <Typography variant="body1" component="h2" fontWeight={600}>
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {moreNames.map((name) => name + " ")}
            </Typography>
        </Box>
    );
};

export default PlantNames;
