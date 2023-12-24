import { Grid } from "@mui/material";
import { FC } from "react";
import Card from "components/Card";
import { Site } from "shared/types/sites";
import { MENU_OPTIONS } from "./SitesList.util";
import useCardsList from "shared/hooks/useCardsList";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import { CardView } from "shared/types/card";

type SitesListProps = {
    data: Site[];
};

const SitesList: FC<SitesListProps> = (props) => {
    const { data } = props;

    const { isCardVertical, getGridColumns, getImageSize } = useCardsList({
        view: CardView.CARDS,
    });

    return (
        <Grid
            container
            marginTop={1}
            spacing={1}
            columns={getGridColumns()}
            alignItems="stretch"
        >
            {data.map((site: Site) => (
                <Grid item xs={1} key={site.id}>
                    <Card
                        key={site.id}
                        data={site}
                        size={getImageSize()}
                        vertical={isCardVertical}
                        menu={{
                            options: MENU_OPTIONS,
                            Icon: LocationCityOutlinedIcon,
                        }}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default SitesList;
