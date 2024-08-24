import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { SignInPage, SignUpPage } from '../lib/main.ts';
import App from './App.tsx';
import { ProtectedRoute } from '../lib/components/helpers/ProtectedRoute.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <SignInPage callbackUrl='/protected-route' />,
    },
    {
        path: "/sign-up",
        element: <SignUpPage callbackUrl='/protected-route' />,
    },
    {
        path: "/protected-route",
        element: <ProtectedRoute>
            <App />
        </ProtectedRoute>
    }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
