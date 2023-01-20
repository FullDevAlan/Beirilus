import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './component/Pages/Home/Home';
import './index.css';
import "./assets/css/bootstrap.min.css"
// import "./assets/js/bootstrap.bundle.min.js"
import AppRoutes from './component/Routes/appRoutes';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
