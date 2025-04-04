import { RouteObject } from "react-router-dom";
import AdminLayout from "../components/layout/AdminLayout";
import RequireAuth from "../components/auth/RequireAuth";
import Dashboard from "../pages/Dashboard";
import Doctors from "../pages/Doctors";
import Patients from "../pages/Patients";
import Appointments from "../pages/Appointments";

export const privateRoutes: RouteObject[] = [
    {
        path:'/admin',
        element:(
            <RequireAuth>
                <AdminLayout/>
            </RequireAuth>
        ),
        children: [
            {
                index:true,
                element:<Dashboard/>
            },
            {
                path:'doctors',
                element:<Doctors/>
            },
            {
                path:'patients',
                element:<Patients/>
            },
            {
                path:'appointments',
                element:<Appointments/>
            }
        ]

    }
]