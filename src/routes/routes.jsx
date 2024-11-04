
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from './../pages/Home';
import Statistics from './../pages/Statistics';

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path:"statistics",
            element: <Statistics></Statistics>
        },
        {
            path:"dashboard",
            element: <h1>Dashboard</h1>
        },
    ]
  },
  
]);
