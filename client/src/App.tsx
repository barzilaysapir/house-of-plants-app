import { CacheProvider, ThemeProvider } from "@emotion/react";
import { Direction } from "@mui/material";
import Layout from "layout/Layout";
import { useEffect, useState } from "react";
import { User } from "shared/types/Users";
import theme from "config/theme";
import cacheRtl from "config/cacheRtl";
import { Outlet } from "react-router";
import GlobalStyles from "styles/GlobalStyle";
import { Global } from "@emotion/react";
import { SWRConfig } from "swr";
import { gapi } from "gapi-script";
import Login from "features/GoogleAuth/Login";
import Logout from "features/GoogleAuth/Logout";

const client_id =
    "191768196113-s7275bjfqb7o2fgj2egatjnpdm7llmeb.apps.googleusercontent.com";

function App() {
    const [direction, setDirection] = useState<Direction>("ltr"); // change to context

    useEffect(() => {
        // LOCALE.setLanguage('he');
        // setDirection(LOCALE.direction as Direction);
    }, []);

    useEffect(() => {
        function start() {
            gapi.client.init({
                client_id,
                scope: "",
            });
        }
        gapi.load("client:auth2", start);
    });

    return (
        <div dir={direction}>
            <ThemeProvider theme={theme}>
                <SWRConfig
                    value={{
                        errorRetryCount: 3,
                        focusThrottleInterval: 5000,
                    }}
                >
                    <Global styles={GlobalStyles} />
                    <Login />
                    <Logout />
                    <Layout>
                        <Outlet />
                    </Layout>
                </SWRConfig>
            </ThemeProvider>
        </div>
    );
}

export default App;
