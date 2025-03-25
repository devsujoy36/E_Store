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
import Products from './Components/Products/Products.jsx';
import ErrorPage from './Pages/ErrorPage/ErrorPage.jsx';
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
                path: "/login",
                element:<LogIn/>
            },
            {
                path: "/signup",
                element:<SignUp/>
            },
            {
                path: "/products",
                element:<Products   />
            },
        ]
    },
]);
createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
