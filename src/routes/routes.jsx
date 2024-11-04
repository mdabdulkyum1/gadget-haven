
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from './../pages/Home';

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
            element: <h1>statistics</h1>
        },
        {
            path:"dashboard",
            element: <h1>Dashboard</h1>
        },
    ]
  },
  
]);
