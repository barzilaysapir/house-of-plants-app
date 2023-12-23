import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as LeafIcon } from "assets/icons/leaf.svg";
import i18n from "config/locales";
import { Alarm, QrCodeScanner } from "@mui/icons-material";
import { Route } from "shared/types/route";

export const BOTTOM_NAV_LINKS = [
    {
        label: i18n.t("reminders.title"),
        icon: <Alarm />,
        to: Route.REMINDERS,
    },
    {
        label: i18n.t("myPlants.title"),
        icon: <SvgIcon component={LeafIcon} viewBox="2000 500 1 5500" />,
        to: Route.MY_PLANTS,
    },
    {
        label: i18n.t("identify.title"),
        icon: <QrCodeScanner />,
        to: Route.IDENTIFY,
    },
];

export const getActiveNavlink = () => {
    return BOTTOM_NAV_LINKS.findIndex(
        ({ to }) => to.split("/")[1] === window.location.pathname.split("/")[1]
    );
};
