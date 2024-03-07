import { FC } from "react";
import EmptyState from "components/EmptyState";
import i18n from "config/locales/i18n";
import { useOutletContext } from "react-router";
import { MyPlantsOutletContext } from "shared/types/UI";
import useLocalStorage from "shared/hooks/useLocalStorage";
import useFetchData from "shared/hooks/useFetchData";
import SitesList from "features/MyPlants/SitesList/SitesList";
import QueryKey from "shared/types/queryKeys";
import Loader from "components/Loader/Loader";
import {Site} from "../../shared/types/sites";

const SitesTab: FC = () => {
    const user = JSON.parse(useLocalStorage().user);
    const { handleOpen } = useOutletContext<MyPlantsOutletContext>();

    const { loading } = useFetchData({
        keys: [QueryKey.USER_SITES],
        url: `/users/${user!._id}/sites`,
    });

    const data: Site[] =  [{
        id: "1",
        name: "Salon",
        image: "https://via.placeholder.com/100?text=Hello+World&font=roboto",
    }]

    if (loading) return <Loader />;

    if (data.length === 0)
        return (
            <EmptyState
                handleOpen={handleOpen}
                callToAction={{
                    label: i18n.t("myPlants.sites.emptyState"),
                }}
            />
        );

    return <SitesList data={data} />;
};

export default SitesTab;
