import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';


const router = createBrowserRouter([

  {
    path: "*",
    element: <App />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
