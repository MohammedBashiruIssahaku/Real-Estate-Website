
import './index.css'
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import Agents from './Pages/Agents.jsx';
import Blog from './Pages/Blog.jsx';
import Home from './Pages/Home.jsx';
import Properties from './Pages/Properties.jsx';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element:<Home/> },
      {path: "/properties", element:<Properties/> },
      {path: "/agents", element:<Agents/> },
      {path: "/blog", element:<Blog/> },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
