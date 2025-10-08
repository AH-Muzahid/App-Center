import React, { Children } from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from './Roots';
import Home from '../pages/Home';
import RootError from '../pages/RootError';
import AllApps from '../pages/AllApps';



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
           

        ],
    },
]);