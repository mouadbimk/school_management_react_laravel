import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import NotFound from "../pages/NotFound";
import Layout from "../layouts/layout";
import GuestLayout from "../layouts/GuestLayout";
import StudentDashboard from "../components/Student/StudentDashboard";
import AdminDashboardLayout from "../layouts/admin/AdminDashboardLayout";
import AdminDashboard from "../components/Admin/AdminDashboard";
import TeacherDashboard from './../components/Teacher/TeacherDashboard';
import TeacherDashboardLayout from './../layouts/Teacher/TeacherDashboardLayout';
import ManageParent from "../components/Admin/ManageParent";
import StudentDashboardLayout from "../layouts/Student/StudentDashboardLayout";
export const STUDENT_DASHBOARD_ROUTE = '/student/dashboard';
export const ADMIN_BASE_ROUTE = '/admin';
export const ADMIN_DASHBOARD_LAYOUT = ADMIN_BASE_ROUTE + '/dashboard';
export const ADMIN_MANAGE_PARENT_ROUTE = ADMIN_BASE_ROUTE + '/manage-parent';
export const TEACHER_DASHBOARD_LAYOUT = '/teacher/dashboard';
export const LOGIN_ROUTE = '/login';
export const router = createBrowserRouter([
    {
        element: <Layout />,
        children:[
            {
                path:'/',
                'element':<Home />
            },
           
            {
                path:'*',
                'element':<NotFound />
            },
          
        ]
    },
    {
        element: <GuestLayout />,
        children:[
            {
                path: LOGIN_ROUTE,
                'element':<Login />
            },
            {
                path:'/signup',
                'element':<Register />
            },
        ],
    },
    {
        element: <StudentDashboardLayout />,
        children:[
            {
                path: STUDENT_DASHBOARD_ROUTE,
                'element': <StudentDashboard />
            },

        ],
    },
    {
        element: <AdminDashboardLayout />,
        children:[
            {
                path: ADMIN_DASHBOARD_LAYOUT,
                'element': <AdminDashboard />
            },
            {
                path: ADMIN_MANAGE_PARENT_ROUTE,
                'element': <ManageParent />
            },

        ],
    },
    {
        element: <TeacherDashboardLayout />,
        children:[
            {
                path: TEACHER_DASHBOARD_LAYOUT,
                'element': <TeacherDashboard />
            },

        ],
    },
    
    
]);