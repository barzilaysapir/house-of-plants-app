import { FC } from "react";
import PageHeader from "components/PageHeader";
import { Box } from "@mui/material";
import i18n from "i18next";

type RemindersProps = {};

const Reminders: FC<RemindersProps> = (props) => {
    return (
        <>
            <PageHeader title={i18n.t("reminders.title")} />
            <Box component="main"></Box>
        </>
    );
};

export default Reminders;
