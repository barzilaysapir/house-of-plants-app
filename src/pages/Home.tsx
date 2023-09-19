import { FC } from "react";
import PageHeader from "components/PageHeader/component";
import { Box } from "@mui/material";
import LOCALE from "locale/Locale";

type HomeProps = {}

const Home: FC<HomeProps> = props => {
    return (
        <>
            <PageHeader title={LOCALE.home.title} />
            <Box component="main">

            </Box>
        </>
    )
}

export default Home;
