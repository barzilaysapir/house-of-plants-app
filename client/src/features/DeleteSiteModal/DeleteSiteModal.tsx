import { Dispatch, FC, SetStateAction } from "react";
import QuickActionModal from "components/QuickActionModal";
import i18n from "config/locales";
import useMutateData from "shared/hooks/useMutateData";
import QueryKey from "shared/types/queryKeys";
import useLocalStorage from "shared/hooks/useLocalStorage";
import { Typography } from "@mui/material";
import { Site } from "shared/types/sites";

type DeleteSiteModalProps = {
    site: Site;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const DeleteSiteModal: FC<DeleteSiteModalProps> = (props) => {
    const { site, open, setOpen } = props;
    const user = JSON.parse(useLocalStorage().user);

    const { mutate } = useMutateData({
        url: `/users/${user._id}/deleteSite/${site.id}`,
        onComplete: () => setOpen(false),
        refetchOnSuccessKey: QueryKey.USER_SITES,
    });

    return (
        <QuickActionModal
            submit={() => mutate({})}
            submitLabel={i18n.t("siteMenu.delete")}
            cancel={() => setOpen(false)}
            cancelLabel={i18n.t("removeSite.cancel")}
            open={open}
            setOpen={setOpen}
        >
            <Typography>
                {i18n.t("removeSite.description", {
                    site: site.name,
                })}
            </Typography>
        </QuickActionModal>
    );
};

export default DeleteSiteModal;
