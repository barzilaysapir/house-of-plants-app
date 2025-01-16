import { Grid } from "@mui/material";
import { FC } from "react";
import { Site } from "shared/types/sites";
import useCardsList from "shared/hooks/useCardsList";
import { CardView } from "shared/types/card";
import SiteCard from "features/SiteCard/SiteCard";

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
            {data.map((site) => (
                <Grid item xs={1} key={site.id}>
                    <SiteCard
                        key={site.id}
                        site={site}
                        size={getImageSize()}
                        vertical={isCardVertical}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default SitesList;
