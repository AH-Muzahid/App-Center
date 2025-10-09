import React, { Children } from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from './Roots';
import Home from '../pages/Home';
import RootError from '../pages/RootError';
import AllApps from '../pages/AllApps';
import AppDetails from '../pages/AppDetails';
import Installation from '../pages/Installation';
import Loader from '../Components/Loader';




export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        hydrateFallbackElement: <Loader />,
        children: [
            {
                index: true,
                loader: () => fetch('/allApps.json'),
                path: "/",
                Component: Home,
                HydrateFallback: Loader,
            },
            {
                path: "/apps",
                loader: () => fetch('/allApps.json'),
                Component: AllApps,
                HydrateFallback: Loader,
            },
            {
                path: "/app/:id",
                loader: ({params}) => fetch('/allApps.json').then(res => res.json()).then(data => data.find(app => app.id == params.id)),
                Component: AppDetails,
                HydrateFallback: Loader,
            },
            {
                path: "/installation",
                loader: () => fetch('/allApps.json'),
                Component: Installation,
                HydrateFallback: Loader,
            },
            {
                path: "*",
                Component: RootError,
            }
        ],
    },
]);