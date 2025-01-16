import { Dispatch, FC, SetStateAction } from "react";
import QuickActionModal from "components/QuickActionModal";
import i18n from "config/locales";
import useMutateData from "shared/hooks/useMutateData";
import QueryKey from "shared/types/queryKeys";
import useLocalStorage from "shared/hooks/useLocalStorage";

type DeleteSiteModalProps = {
    siteId: string;
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const DeleteSiteModal: FC<DeleteSiteModalProps> = (props) => {
    const { siteId, open, setOpen } = props;
    const user = JSON.parse(useLocalStorage().user);

    const { mutate } = useMutateData({
        url: `/users/${user._id}/deleteSite/${siteId}`,
        onComplete: () => setOpen(false),
        refetchOnSuccessKey: QueryKey.USER_SITES,
    });

    return (
        <QuickActionModal
            buttonLabel={i18n.t("siteMenu.delete")}
            onClick={() => mutate({})}
            open={open}
            setOpen={setOpen}
        />
    );
};

export default DeleteSiteModal;
