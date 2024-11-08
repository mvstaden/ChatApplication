import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { Chat, Login, ProfileUpdate } from "./pages/index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Login />,
        },
        {
          path: "chat",
          element: <Chat />,
        },
        {
          path: "profile",
          element: <ProfileUpdate />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
