import App from "App";
import Reminders from "../Reminders/Reminders";
import Identify from "../Identify/Identify";
import { Navigate, createBrowserRouter } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import ProtectedRoute from "components/ProtectedRoute";
import NotFound from "../NotFound/NotFound";
import { Route } from "shared/types/route";
import myPlantsRoutes from "./myPlantsRoutes";
import LoaderWrapper from "components/Loader/LoaderWrapper";

const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate to={Route.MY_PLANTS} replace />,
            },
            {
                path: Route.SIGN_IN,
                element: <SignIn />,
            },
            {
                element: <LoaderWrapper />,
                children: myPlantsRoutes,
            },
            {
                path: Route.REMINDERS,
                element: (
                    <ProtectedRoute>
                        <Reminders />
                    </ProtectedRoute>
                ),
            },
            {
                path: Route.IDENTIFY,
                element: (
                    <ProtectedRoute>
                        <Identify />
                    </ProtectedRoute>
                ),
            },
        ],
        errorElement: <NotFound />,
    },
]);

export default router;
