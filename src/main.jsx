import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import "./main.css";

import AppRouter from "../utils/AppRouter.jsx";
import { AppProvider } from "../utils/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <RouterProvider router={AppRouter} />
    </AppProvider>
  </StrictMode>
);
