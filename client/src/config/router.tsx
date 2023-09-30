import App from "App";
import Reminders from "pages/Reminders/Reminders";
import Identify from "pages/Identify/Identify";
import MyPlants from "pages/MyPlants/MyPlants";
import { myPlantsLoader } from "pages/MyPlants/MyPlants.util";
import { createBrowserRouter } from "react-router-dom";
import { appLoader } from "./appLoader";
import SignIn from "pages/SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        loader: appLoader,
        children: [
            {
                path: "/SignIn",
                element: <SignIn />,
            },
            {
                path: "/reminders",
                element: <Reminders />,
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
        errorElement: <div>Page not found</div>,
    },
]);
