import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Contact from '../src/pages/Contact';
import Service from '../src/pages/Service';
import Gallery from '../src/pages/Gallery';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/service",
      element: <Service />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
    },
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router} />
  
);
