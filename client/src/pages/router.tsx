import App from "App";
import Reminders from "./Reminders/Reminders";
import Identify from "./Identify/Identify";
import MyPlants from "./MyPlants/MyPlants";
import { Navigate, createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import ProtectedRoute from "components/ProtectedRoute";
import { MyPlantsRoute, Route } from "shared/types/route";
import MyPlantsList from "features/MyPlants/MyPlantsList/MyPlantsList";
import MySitesList from "features/MyPlants/MySitesList/MySitesList";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            {
                path: Route.HOME,
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
                children: [
                    {
                        path: Route.MY_PLANTS + MyPlantsRoute.PLANTS,
                        element: <MyPlantsList />,
                    },
                    {
                        path: Route.MY_PLANTS + MyPlantsRoute.SITES,
                        element: <MySitesList />,
                    },
                ],
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
