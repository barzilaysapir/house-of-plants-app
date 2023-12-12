import LightSubstrate from "assets/images/light_substrate.jpg";
import MediumSubstrate from "assets/images/medium_substrate.jpg";
import HeavySubstrate from "assets/images/heavy_substrate.jpg";
import SemiHydroSubstrate from "assets/images/semi_hydro_substrate.jpg";
import HydroSubstrate from "assets/images/hydro_substrate.jpg";
import i18n from "config/locales/i18n";
import { SoilType } from "features/AddPlantDialog/AddPlantDialog.types";

export const SOIL_TYPES = [
    {
        id: SoilType.LIGHT,
        name: i18n.t("substrate.light"),
        description: i18n.t("substrate.description.light"),
        image: LightSubstrate,
    },
    {
        id: SoilType.MEDIUM,
        name: i18n.t("substrate.medium"),
        description: i18n.t("substrate.description.medium"),
        image: MediumSubstrate,
    },
    {
        id: SoilType.HEAVY,
        name: i18n.t("substrate.heavy"),
        description: i18n.t("substrate.description.heavy"),
        image: HeavySubstrate,
    },
    {
        id: SoilType.SEMI_HYDRO,
        name: i18n.t("substrate.semiHydro"),
        description: i18n.t("substrate.description.semiHydro"),
        image: SemiHydroSubstrate,
    },
    {
        id: SoilType.HYDRO,
        name: i18n.t("substrate.hydro"),
        description: i18n.t("substrate.description.hydro"),
        image: HydroSubstrate,
    },
];
