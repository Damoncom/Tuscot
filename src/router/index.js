import { useRoutes, Navigate } from 'react-router-dom';
import React, { memo } from 'react';
import Login from '../components/login/index';
import Home from '../home/index.js';

const DefineRoutes = memo(() => {
  const routes = useRoutes([
    {
      path: '/Login',
      element: <Login />,
    },
    {
      path: '/Home',
      element: <Home />,
    },
    {
      path: '/',
      element: <Login />,
    },
  ]);
  return routes;
});

export default DefineRoutes;
