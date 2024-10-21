import { useRoutes, Navigate } from 'react-router-dom';
import React, { memo } from 'react';
import Login from '../login/index';
import Home from '../home/index.js';
import Dashboard from '../components/main/dashboard/index.js';
import Projects from '../components/main/projects/index.js';
import MyTask from '../components/main/myTask/index.js';
import Message from '../components/main/message/index.js';
import Analytics from '../components/main/analytics/index.js';

const DefineRoutes = memo(() => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/Login',
      element: <Login />,
    },
    {
      path: '/Home',
      element: <Home />,
      children: [
        { path: '/Home/Dashboard', element: <Dashboard /> },
        { path: '/Home/Projects', element: <Projects /> },
        { path: '/Home/MyTask', element: <MyTask /> },
        { path: '/Home/Message', element: <Message /> },
        { path: '/Home/Analytics', element: <Analytics /> },
      ],
    },
  ]);
  return routes;
});

export default DefineRoutes;
