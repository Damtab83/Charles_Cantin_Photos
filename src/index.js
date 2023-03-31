import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Contact from '../src/components/pages/Contact';
import Service from '../src/components/pages/Service';
import Gallery from './components/pages/Gallery';

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
