import { Box, Typography } from "@mui/material";
import { FC } from "react";

type PlantNamesProps = {
    primaryName: string;
    secondaryName: string;
};

const PlantNames: FC<PlantNamesProps> = (props) => {
    const { primaryName, secondaryName } = props;

    return (
        <Box>
            <Typography variant="body1" component="h2" fontWeight={600} noWrap>
                {primaryName}
            </Typography>
            <Typography variant="body2" color="textSecondary" noWrap>
                {secondaryName}
            </Typography>
        </Box>
    );
};

export default PlantNames;
