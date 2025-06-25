
import './index.css'
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';



import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
