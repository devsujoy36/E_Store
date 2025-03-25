import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import Root_Page from './Root_Page/Root_Page.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import LogIn from './Pages/Login/Login.jsx';
import SignUp from './Pages/SignUp/SignUp.jsx';
import ContactUs from './Pages/ContactUs/ContactUs.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
import Projects from './Pages/Projects/Projects.jsx';
import Courses from './Pages/Courses/Courses.jsx';
import Products from './Pages/Products/Products.jsx';
const router = createBrowserRouter([
    {
        path: "/",
        element:<Root_Page/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path: "/",
                element:<Home/>
            },
            {
                path: "/about",
                element:<About/>
            },
            {
                path: "/contactus",
                element:<ContactUs/>
            },
            {
                path: "/products",
                element:<Products/>
            },
            {
                path: "/courses",
                element:<Courses/>
            },
            {
                path: "/projects",
                element:<Projects/>
            },
            {
                path: "/login",
                element:<LogIn/>
            },
            {
                path: "/signup",
                element:<SignUp/>
            },
        ]
    },
]);
createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
