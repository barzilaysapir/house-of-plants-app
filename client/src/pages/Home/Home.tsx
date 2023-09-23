import { FC } from "react";
import PageHeader from "components/PageHeader/PageHeader";
import { Box } from "@mui/material";
import i18n from "i18next";

type HomeProps = {};

const Home: FC<HomeProps> = (props) => {
    return (
        <>
            <PageHeader title={i18n.t("home.title")} />
            <Box component="main"></Box>
        </>
    );
};

export default Home;
