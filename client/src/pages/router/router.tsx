import App from "App";
import Reminders from "../Reminders/Reminders";
import Identify from "../Identify/Identify";
import { Navigate, createBrowserRouter } from "react-router-dom";
import SignIn from "../SignIn/SignIn";
import ProtectedRoute from "components/ProtectedRoute";
import { Route } from "shared/types/route";
import myPlantsRoutes from "./myPlantsRoutes";
import SuspenseWrapper from "components/SuspenseWrapper";

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
                element: <SuspenseWrapper />,
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
        errorElement: <div>404 - Page Not Fount</div>,
    },
]);

export default router;
