import { Global, ThemeProvider } from "@emotion/react";
import Layout from "layout/Layout";
import theme from "config/theme";
import { Outlet } from "react-router-dom";
import GLOBAL_STYLES, { GLOBAL_IMPORTS } from "styles/GlobalStyles";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { QUERY_CLIENT } from "config/reactQuery";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GoogleOAuthProvider
                clientId={import.meta.env.VITE_APP_GOOGLE_CLIENT_ID!}
            >
                <QueryClientProvider client={QUERY_CLIENT}>
                    <Global styles={GLOBAL_IMPORTS} />
                    <Global styles={GLOBAL_STYLES} />

                    <Layout>
                        <Outlet />
                    </Layout>
                </QueryClientProvider>
            </GoogleOAuthProvider>
        </ThemeProvider>
    );
}

export default App;
