import { RouteObject } from "react-router-dom";

import Login from "../pages/Login/Login";
import Register from "../pages/Login/Register";

export const publicRoutes: RouteObject[] = [
    {
        path:'/',
        element:<Login/>
    },
    {
        path:'/login',
        element:<Login/>
    },
    {
        path:'/register',
        element:<Register/>
    }
];