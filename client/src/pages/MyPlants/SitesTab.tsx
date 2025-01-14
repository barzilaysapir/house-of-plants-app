import { FC } from "react";
import i18n from "config/locales/i18n";
import { useOutletContext } from "react-router-dom";
import { MyPlantsOutletContext } from "shared/types/UI";
import useLocalStorage from "shared/hooks/useLocalStorage";
import useFetchData from "shared/hooks/useFetchData";
import SitesList from "features/MyPlants/SitesList/SitesList";
import QueryKey from "shared/types/queryKeys";
import Loader from "components/Loader/Loader";
import useMutateData from "shared/hooks/useMutateData";
import QuickAction from "components/QuickAction";

const SitesTab: FC = () => {
    const user = JSON.parse(useLocalStorage().user);
    const { handleOpen } = useOutletContext<MyPlantsOutletContext>();

    const { loading, data } = useFetchData({
        keys: [QueryKey.USER_SITES],
        url: `/users/${user!._id}/sites`,
    });

    const { mutate } = useMutateData({
        url: `/users/${user._id}/addSite`,
        refetchOnSuccessKey: QueryKey.USER_SITES,
    });

    if (loading) return <Loader />;

    if (data.length === 0)
        return (
            <QuickAction
                callToAction={{
                    onClick: (name) => mutate({ name }),
                    buttonLabel: i18n.t("myPlants.sites.emptyStateButton"),
                    inputLabel: i18n.t("myPlants.sites.emptyStateInput"),
                }}
            />
        );

    return <SitesList data={data} />;
};

export default SitesTab;
