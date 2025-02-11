import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.js';
import Get from './Get.js';
import Update from './Update.js';
import reportWebVitals from './reportWebVitals';


const router = createBrowserRouter([
  {
    path: "/add",
    element: <App />
  },
  {
    path: "/",
    element: <Get />
  },
  {
    path: "/update/:id",
    element: <Update />
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
