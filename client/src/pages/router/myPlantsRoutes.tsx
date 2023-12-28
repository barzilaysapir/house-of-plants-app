import { Navigate, RouteObject } from "react-router-dom";
import ProtectedRoute from "components/ProtectedRoute";
import { MyPlantsRoute, PlantSettingsRoute, Route } from "shared/types/route";
import MyPlants, {
    PlantsTab,
    SitesTab,
    PlantPreview,
    plantPreviewLoader,
} from "pages/MyPlants";

const myPlantsRoutes: RouteObject[] = [
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
        path: `${Route.MY_PLANTS}${MyPlantsRoute.PLANTS}/:plantId${PlantSettingsRoute.PREVIEW}`,
        element: <PlantPreview />,
        loader: plantPreviewLoader,
    },
];

export default myPlantsRoutes;
