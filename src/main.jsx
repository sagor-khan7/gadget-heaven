import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainLayouts from "./Layouts/MainLayouts.jsx";
import Home from "./pages/Home.jsx";
import Statistics from "./pages/Statistics.jsx";
import Dashboard from "./pages/Dashboard.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
