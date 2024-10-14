import React, { memo } from 'react';
import DefineRoutes from './router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="content_warrper">
        <DefineRoutes></DefineRoutes>
      </div>
    </BrowserRouter>
  );
}

export default App;
