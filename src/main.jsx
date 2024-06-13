import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404 not found</h1>
  },
  {
    path: "/pages/apartment",
    element: <h1>Nos appartements</h1>
  },
  {
    path: "/pages/about",
    element: <h1>A propos</h1>
  },
  {
    path: "/pages/error",
    element: <h1>404 Oups! La page que vous demandez n'existe pas</h1>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
