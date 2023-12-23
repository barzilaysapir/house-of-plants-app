import App from "App";
import Reminders from "./Reminders/Reminders";
import Identify from "./Identify/Identify";
import MyPlants from "./MyPlants/MyPlants";
import { Navigate, createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import ProtectedRoute from "components/ProtectedRoute";
import { Route } from "shared/types/route";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Navigate to={Route.MY_PLANTS} replace />,
            },
            {
                path: Route.SIGN_IN,
                element: <SignIn />,
            },
            {
                path: Route.MY_PLANTS,
                element: (
                    <ProtectedRoute>
                        <MyPlants />
                    </ProtectedRoute>
                ),
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
        errorElement: <div>Error</div>,
    },
]);
