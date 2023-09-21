import { FC } from "react";
import PageHeader from "components/PageHeader/PageHeader";
import { Box } from "@mui/material";
import LOCALE from "config/locales/i18n";
import { useTranslation } from "react-i18next";

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader title={t("home.title")} />
            <Box component="main"></Box>
        </>
    );
};

export default Home;
