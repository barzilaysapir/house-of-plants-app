import MyPlants from "../MyPlants/MyPlants";
import { Navigate } from "react-router-dom";
import ProtectedRoute from "components/ProtectedRoute";
import { MyPlantsRoute, PlantSettingsRoute, Route } from "shared/types/route";
import PlantsTab from "features/MyPlants/PlantsTab/PlantsTab";
import SitesTab from "features/MyPlants/SitesTab/SitesTab";
import PlantPreview from "../MyPlants/PlantPreview";

const myPlantsRouter = [
    {
        path: Route.MY_PLANTS,
        element: (
            <ProtectedRoute>
                <MyPlants />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: (
                    <Navigate
                        to={Route.MY_PLANTS + MyPlantsRoute.PLANTS}
                        replace
                    />
                ),
            },
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
        path: `${Route.MY_PLANTS}${MyPlantsRoute.PLANTS}/:id${PlantSettingsRoute.PREVIEW}`,
        element: <PlantPreview />,
    },
];

export default myPlantsRouter;
