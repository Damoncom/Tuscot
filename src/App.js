import React, { memo } from 'react';
import DefineRoutes from './router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="content_warrper" style={{ backgroundColor: '#F9F8F8' }}>
        <DefineRoutes></DefineRoutes>
      </div>
    </BrowserRouter>
  );
}

export default App;
