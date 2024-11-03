
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
        {
            path: "/",
            element: <h1>Home</h1>
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
