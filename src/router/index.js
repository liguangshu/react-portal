import { createBrowserRouter } from "react-router-dom";
import React from "react";
const Login = React.lazy(() => import("../pages/user/Login.jsx"));
const Home = React.lazy(() => import("../pages/home/index.jsx"));
const routes = createBrowserRouter([
    {
        path: "/login",
        Component: Login,
    },
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/home",
        Component: Home,
    }
]);
export default routes;