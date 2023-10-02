import { Box, Typography } from "@mui/material";
import { FC } from "react";

type PlantNamesProps = {
    name: string;
    anotherName: string;
};

const PlantNames: FC<PlantNamesProps> = (props) => {
    const { name, anotherName } = props;

    return (
        <Box>
            <Typography variant="body1" component="h2" fontWeight={600} noWrap>
                {name}
            </Typography>
            <Typography variant="body2" color="textSecondary" noWrap>
                {anotherName}
            </Typography>
        </Box>
    );
};

export default PlantNames;
