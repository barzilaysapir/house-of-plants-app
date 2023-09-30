import { CacheProvider, ThemeProvider } from "@emotion/react";
import { Direction } from "@mui/material";
import Layout from "layout/Layout";
import { useEffect, useState } from "react";
import theme from "config/theme";
import cacheRtl from "config/cacheRtl";
import { Outlet } from "react-router";
import GlobalStyles from "styles/GlobalStyle";
import { Global } from "@emotion/react";
import { SWRConfig } from "swr";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
    const [direction, setDirection] = useState<Direction>("ltr"); // change to context

    useEffect(() => {
        // LOCALE.setLanguage('he');
        // setDirection(LOCALE.direction as Direction);
    }, []);

    return (
        <div dir={direction}>
            <ThemeProvider theme={theme}>
                <GoogleOAuthProvider
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
                >
                    <SWRConfig
                        value={{
                            errorRetryCount: 3,
                            focusThrottleInterval: 5000,
                        }}
                    >
                        <Global styles={GlobalStyles} />
                        <Layout>
                            <Outlet />
                        </Layout>
                    </SWRConfig>
                </GoogleOAuthProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
