import { FC } from "react";
import PageHeader from "components/PageHeader/PageHeader";
import { Box } from "@mui/material";
import LOCALE from "config/locale/Locale";

type IdentifyProps = {};

const Identify: FC<IdentifyProps> = (props) => {
    return (
        <>
            <PageHeader title={LOCALE.identify.title} />
            <Box component="main"></Box>
        </>
    );
};

export default Identify;
