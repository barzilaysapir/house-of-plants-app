import i18n from "config/locales";
import { Site } from "shared/types/sites";
import { MenuOption } from "shared/types/UI";
import {
    AddAPhoto,
    Delete,
    Edit,
    Notifications,
    Preview,
} from "@mui/icons-material";
import { useState } from "react";

const useSiteCard = () => {
    const [openDeleteModal, setOpenDeleteModal] = useState(false);

    const menuOptions: MenuOption[] = [
        {
            name: i18n.t("siteMenu.preview"),
            to: "/preview",
            icon: <Preview />,
        },
        {
            name: i18n.t("siteMenu.editSite"),
            to: "/edit",
            icon: <Edit />,
        },
        {
            name: i18n.t("siteMenu.uploadPhoto"),
            to: "/photo",
            icon: <AddAPhoto />,
        },
        {
            name: i18n.t("siteMenu.reminders"),
            to: "/edit/reminders",
            icon: <Notifications />,
        },
        {
            name: i18n.t("siteMenu.delete"),
            onClick: () => setOpenDeleteModal(true),
            icon: <Delete />,
        },
    ];

    return {
        menuOptions,
        openDeleteModal,
        setOpenDeleteModal,
    };
};

export default useSiteCard;
