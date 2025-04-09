import { RouteObject } from "react-router-dom";
import React from "react";
import { Dashboard } from "@mui/icons-material";
import Appointments from "../pages/Appointments";
import Patients from "../pages/Patients";
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