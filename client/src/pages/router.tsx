import App from "App";
import Reminders from "./Reminders/Reminders";
import Identify from "./Identify/Identify";
import MyPlants from "./MyPlants/MyPlants";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import ProtectedRoute from "components/ProtectedRoute";
import { Route } from "shared/types/route";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: Route.SIGN_IN,
                element: <SignIn />,
            },
            {
                path: Route.HOME,
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
