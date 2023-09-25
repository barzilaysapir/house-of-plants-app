import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as LeafIcon } from "assets/icons/leaf.svg";
import i18n from "config/locales/i18n";
import { Alarm, QrCodeScanner } from "@mui/icons-material";

export const BOTTOM_NAV_LINKS = [
    {
        label: i18n.t("reminders.title"),
        icon: <Alarm />,
        to: "/reminders",
    },
    {
        label: i18n.t("myPlants.title"),
        icon: <SvgIcon component={LeafIcon} viewBox="2000 500 1 5500" />,
        to: "/",
    },
    {
        label: i18n.t("identify.title"),
        icon: <QrCodeScanner />,
        to: "/identify",
    },
];

export const getActiveNavlink = () => {
    return BOTTOM_NAV_LINKS.findIndex(
        ({ to }) => to.split("/")[1] === window.location.pathname.split("/")[1]
    );
};
