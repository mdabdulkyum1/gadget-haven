
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from './../pages/Home';
import Statistics from './../pages/Statistics';
import Dashboard from './../pages/Dashboard';

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
            element: <Dashboard></Dashboard>
        },
    ]
  },
  
]);
