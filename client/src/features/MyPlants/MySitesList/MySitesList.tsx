import { Grid } from "@mui/material";
import { FC } from "react";
import Card from "components/Card";
import { Site } from "shared/types/sites";
import { MENU_OPTIONS } from "./MySitesList.util";
import useCardsList from "shared/hooks/useCardsList";
import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
import EmptyState from "components/EmptyState";
import i18n from "config/locales/i18n";
import { useOutletContext } from "react-router";
import useFetchData from "shared/hooks/useFetchData";
import useLocalStorage from "shared/hooks/useLocalStorage";
import LoaderBackdrop from "components/LoaderBackdrop";
import { MyPlantsOutletContext } from "shared/types/UI";

const MySitesList: FC = () => {
    const user = JSON.parse(useLocalStorage().user);
    const { view, handleOpen } = useOutletContext<MyPlantsOutletContext>();

    const { loading, data } = useFetchData({
        keys: ["userSites"],
        url: `/users/${user!._id}/sites`,
    });

    const { isCardVertical, getGridColumns, getImageSize } = useCardsList({
        view,
    });

    if (loading) return <LoaderBackdrop />;

    if (data.length === 0)
        return (
            <EmptyState
                handleOpen={handleOpen}
                callToAction={{ label: i18n.t("myPlants.sites.emptyState") }}
            />
        );

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

export default MySitesList;
