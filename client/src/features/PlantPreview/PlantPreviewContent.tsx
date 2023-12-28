import { Box, Typography } from "@mui/material";
import i18n from "config/locales/i18n";
import { FC } from "react";
import { Plant } from "shared/types/plants";

type PlantPreviewContentProps = Pick<
    Plant,
    "primaryName" | "secondaryName" | "site"
>;

const PlantPreviewContent: FC<PlantPreviewContentProps> = (props) => {
    const { primaryName, secondaryName, site } = props;

    return (
        <Box paddingY={5}>
            <Typography variant="h3">{primaryName}</Typography>
            <Typography variant="body1">{site}</Typography>
            <Typography variant="body1">
                Secondary Name: {secondaryName}
            </Typography>
            <Typography variant="body1">
                Site: {site || i18n.t("unassigned")}
            </Typography>
        </Box>
    );
};

export default PlantPreviewContent;
