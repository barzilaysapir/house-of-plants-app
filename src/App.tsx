import { CacheProvider, ThemeProvider } from "@emotion/react";
import { Direction } from "@mui/material";
import Layout from "layout/Layout";
import { useEffect, useState } from "react";
import { User } from "shared/types/Users";
import theme from "config/theme/Theme";
import cacheRtl from "config/CacheRtl";
import { Outlet } from "react-router";
import GlobalStyles from "styles/GlobalStyle";
import { Global } from "@emotion/react";

function App() {
    const [direction, setDirection] = useState<Direction>("ltr"); // change to context

    useEffect(() => {
        // LOCALE.setLanguage('he');
        // setDirection(LOCALE.direction as Direction);
    }, []);

    return (
        <div dir={direction}>
            {/* <CacheProvider value={cacheRtl}> */}
            <ThemeProvider theme={theme}>
                <Global styles={GlobalStyles} />
                <Layout>
                    <Outlet />
                </Layout>
            </ThemeProvider>
            {/* </CacheProvider> */}
        </div>
    );
}

export default App;
