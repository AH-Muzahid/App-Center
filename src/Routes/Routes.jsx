import React, { Children } from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from './Roots';
import Home from '../pages/Home';
import RootError from '../pages/RootError';
import AllApps from '../pages/AllApps';
import AppDetails from '../pages/AppDetails';
import Installation from '../pages/Installation';




export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <RootError></RootError>,
        children: [
            {
                index: true,
                loader: () => fetch('/trending.json'),
                path: "/",
                Component: Home,
            },
            {
                path: "/apps",
                loader: () => fetch('/allApps.json'),
                Component: AllApps,
            },
            {
                path: "/app/:id",
                loader: ({params}) => fetch('/allApps.json').then(res => res.json()).then(data => data.find(app => app.id == params.id)),
                Component: AppDetails,
            },
            {
                path: "/installation",
                loader: () => fetch('/allApps.json'),
                Component: Installation,
            }
           

        ],
    },
]);