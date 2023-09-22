import HomeIcon from "@mui/icons-material/Home";
import SvgIcon from "@mui/material/SvgIcon";
import { ReactComponent as LeafIcon } from "assets/icons/leaf.svg";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import i18n from "config/locales/i18n";

export const BOTTOM_NAV_LINKS = [
    {
        label: i18n.t("home.title"),
        icon: <HomeIcon />,
        to: "/",
    },
    {
        label: i18n.t("myPlants.title"),
        icon: <SvgIcon component={LeafIcon} viewBox="2000 500 1 5500" />,
        to: "/myPlants",
    },
    {
        label: i18n.t("identify.title"),
        icon: <QrCodeScannerIcon />,
        to: "/identify",
    },
];

export const getActiveNavlink = () => {
    return BOTTOM_NAV_LINKS.findIndex(
        ({ to }) => to.split("/")[1] === window.location.pathname.split("/")[1]
    );
};
