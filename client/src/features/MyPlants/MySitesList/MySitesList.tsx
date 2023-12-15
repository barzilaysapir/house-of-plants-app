import { Grid } from "@mui/material";
import { FC } from "react";
import { CardView } from "shared/types/card";
import Card from "components/Card";
import { Site } from "shared/types/sites";
import { MENU_OPTIONS } from "./MySitesList.util";
import useCardsList from "shared/hooks/useCardsList";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";

type MySitesListProps = {
    sites: Site[];
    view: CardView;
};

const MySitesList: FC<MySitesListProps> = (props) => {
    const { sites, view } = props;

    const { isCardVertical, getGridColumns, getImageSize } = useCardsList({
        view,
    });

    return (
        <Grid
            container
            marginTop={1}
            spacing={1}
            columns={getGridColumns()}
            alignItems="stretch"
        >
            {sites.map((site) => (
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

export default MySitesList;
