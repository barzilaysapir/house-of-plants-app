import React from 'react';
import ReactDOM from 'react-dom/client';
import Root, { loader as rootLoader } from './Root';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyPlants from 'pages/MyPlants';
import Identify from 'pages/Identify';
import Home from 'pages/Home';

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/myPlants",
        element: <MyPlants />,
      },
      {
        path: "/identify",
        element: <Identify />,
      }
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
