import { FC } from "react";
import PageHeader from "components/PageHeader/PageHeader";
import { Box } from "@mui/material";
import i18n from "i18next";

type IdentifyProps = {};

const Identify: FC<IdentifyProps> = (props) => {
    return (
        <>
            <PageHeader title={i18n.t("identify.title")} />
            <Box component="main"></Box>
        </>
    );
};

export default Identify;
