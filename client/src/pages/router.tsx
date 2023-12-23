import App from "App";
import Reminders from "./Reminders/Reminders";
import Identify from "./Identify/Identify";
import MyPlants from "./MyPlants/MyPlants";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import ProtectedRoute from "components/ProtectedRoute";
import { MyPlantsRoute, Route } from "shared/types/route";
import PlantsTab from "features/MyPlants/PlantsTab/PlantsTab";
import SitesTab from "features/MyPlants/SitesTab/SitesTab";

export const router = createBrowserRouter([
    {
        path: "",
        element: <App />,
        children: [
            // {
            //     path: Route.HOME,
            //     element: <Navigate to={Route.MY_PLANTS} replace />,
            // },
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
                        element: <PlantsTab />,
                    },
                    {
                        path: Route.MY_PLANTS + MyPlantsRoute.SITES,
                        element: <SitesTab />,
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
