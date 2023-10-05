import { ThemeProvider } from "@emotion/react";
import Layout from "layout/Layout";
import theme from "config/theme";
import { Outlet } from "react-router";
import GLOBAL_STYLES from "styles/GlobalStyles";
import { SWRConfig } from "swr";
import { GoogleOAuthProvider } from "@react-oauth/google";
import SWR_CONFIG from "config/SWR";
import { GlobalStyles } from "@mui/material";
import { QueryClientProvider } from "react-query";
import { QUERY_CLIENT } from "config/reactQuery";

function App() {
    return (
        <div>
            <ThemeProvider theme={theme}>
                <GoogleOAuthProvider
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
                >
                    <SWRConfig value={SWR_CONFIG}>
                        <QueryClientProvider client={QUERY_CLIENT}>
                            <GlobalStyles styles={GLOBAL_STYLES} />

                            <Layout>
                                <Outlet />
                            </Layout>
                        </QueryClientProvider>
                    </SWRConfig>
                </GoogleOAuthProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
