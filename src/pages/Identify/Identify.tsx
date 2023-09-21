import { FC } from "react";
import PageHeader from "components/PageHeader/PageHeader";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";

type IdentifyProps = {};

const Identify: FC<IdentifyProps> = (props) => {
    const { t } = useTranslation();

    return (
        <>
            <PageHeader title={t("identify.title")} />
            <Box component="main"></Box>
        </>
    );
};

export default Identify;
