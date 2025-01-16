import { FC, useState } from "react";
import i18n from "config/locales/i18n";
import useLocalStorage from "shared/hooks/useLocalStorage";
import useFetchData from "shared/hooks/useFetchData";
import SitesList from "features/MyPlants/SitesList";
import QueryKey from "shared/types/queryKeys";
import Loader from "components/Loader/Loader";
import useMutateData from "shared/hooks/useMutateData";
import QuickAction from "components/QuickAction";
import TextField from "@mui/material/TextField";

const SitesTab: FC = () => {
    const user = JSON.parse(useLocalStorage().user);

    const { loading, data } = useFetchData({
        keys: [QueryKey.USER_SITES],
        url: `/users/${user!._id}/sites`,
    });

    const { mutate } = useMutateData({
        url: `/users/${user._id}/addSite`,
        refetchOnSuccessKey: QueryKey.USER_SITES,
    });

    const [siteName, setSiteName] = useState("");

    const submit = () => {
        mutate({ name: siteName });
        setSiteName("");
    };

    if (loading) return <Loader />;

    if (data.length === 0)
        return (
            <QuickAction
                submit={submit}
                submitLabel={i18n.t("myPlants.sites.emptyStateButton")}
            >
                <TextField
                    label={i18n.t("myPlants.sites.emptyStateInput")}
                    variant="standard"
                    onChange={(e) => setSiteName(e.target.value)}
                    autoFocus
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            submit();
                        }
                    }}
                />
            </QuickAction>
        );

    return <SitesList data={data} />;
};

export default SitesTab;
