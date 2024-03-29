import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './Pages/App';
import Home from './Pages/Home';
import reportWebVitals from './reportWebVitals';
import Wheel from './Pages/Wheel';
import Wheel2 from './Pages/Wheel2';
import Home2 from './Pages/Home2';


const router = createBrowserRouter([
  {
    path: "/:id",
    element: <Home/>,
  },
  {
    path: "/app",
    element: <App/>,
  },
  {
    path: "/wheel/:id",
    element: <Wheel/>,
  },
  {
    path: "/:id/x7",
    element: <Home2/>,
  },
  {
    path: "/:id/x7/wheel",
    element: <Wheel2/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
  <div className="img1">
  <div className="shade1">
    <RouterProvider router={router} />
    </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
