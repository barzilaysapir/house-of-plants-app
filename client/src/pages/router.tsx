import App from "App";
import Reminders from "./Reminders/Reminders";
import Identify from "./Identify/Identify";
import MyPlants from "./MyPlants/MyPlants";
import { myPlantsLoader } from "./MyPlants/MyPlants.util";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn/SignIn";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
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
