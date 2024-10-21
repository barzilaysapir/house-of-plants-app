import App from "App";
import Reminders from "pages/Reminders/Reminders";
import Identify from "pages/Identify/Identify";
import MyPlants from "pages/MyPlants/MyPlants";
import { myPlantsLoader } from "pages/MyPlants/MyPlants.util";
import { createBrowserRouter } from "react-router-dom";
import { appLoader } from "./appLoader";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: appLoader,
        children: [
            {
                path: "/",
                element: <MyPlants />,
                loader: myPlantsLoader,
            },
            {
                path: "/reminders",
                element: <Reminders />,
            },
            {
                path: "/identify",
                element: <Identify />,
            },
        ],
    },
]);
