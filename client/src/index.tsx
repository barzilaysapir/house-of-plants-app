import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import LoaderBackdrop from "components/LoaderBackdrop/LoaderBackdrop";
import { router } from "config/router";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "config/locales/i18n";
import { GoogleOAuthProvider } from "@react-oauth/google";

const handleCallbackRes = () => {
    console.log("res: ");
};
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <React.StrictMode>
        <GoogleOAuthProvider
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
            onScriptLoadSuccess={handleCallbackRes}
        >
            <RouterProvider
                router={router}
                fallbackElement={<LoaderBackdrop />}
            />
        </GoogleOAuthProvider>
    </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
