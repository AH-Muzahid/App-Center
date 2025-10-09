import React, { Children } from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from './Roots';
import Home from '../pages/Home';
import RootError from '../pages/RootError';
import AllApps from '../pages/AllApps';
import AppDetails from '../pages/AppDetails';
import Installation from '../pages/Installation';
import AppError from '../pages/AppError';
import LoadingSpinner from '../Components/LoadingSpinner';




export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        hydrateFallbackElement: <LoadingSpinner />,
        children: [
            {
                index: true,
                loader: () => fetch('/allApps.json'),
                path: "/",
                Component: Home,
                HydrateFallback: LoadingSpinner,
            },
            {
                path: "/apps",
                loader: () => fetch('/allApps.json'),
                Component: AllApps,
                HydrateFallback: LoadingSpinner,
            },
            {
                path: "/app/:id",
                loader: ({params}) => {
                    return fetch('/allApps.json')
                        .then(res => res.json())
                        .then(data => {
                            const app = data.find(app => app.id == params.id);
                            if (!app) {
                                throw new Response("App Not Found", { status: 404 });
                            }
                            return app;
                        });
                },
                Component: AppDetails,
                HydrateFallback: LoadingSpinner,
                errorElement: <AppError />,
            },
            {
                path: "/installation",
                loader: () => fetch('/allApps.json'),
                Component: Installation,
                HydrateFallback: LoadingSpinner,
            },
            {
                path: "*",
                Component: RootError,
            }
        ],
    },
]);