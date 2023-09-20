import App from "App";
import Home from "pages/Home/Home";
import Identify from "pages/Identify/Identify";
import MyPlants from "pages/MyPlants/MyPlants";
import { myPlantsLoader } from "pages/MyPlants/MyPlants.util";
import { createBrowserRouter } from "react-router-dom";
import { appLoader } from "./AppLoader";

export const ROUTER = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: appLoader,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "/myPlants",
                element: <MyPlants />,
                loader: myPlantsLoader,
            },
            {
                path: "/identify",
                element: <Identify />,
            },
        ],
    },
]);
