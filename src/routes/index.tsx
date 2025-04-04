import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

const router = createBrowserRouter([...publicRoutes,...privateRoutes])

export const  AppRoutes: React.FC = () =>{
    return <RouterProvider router={router} />
}


