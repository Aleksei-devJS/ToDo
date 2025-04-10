import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../pages/Layout/Layout";
import React, { Suspense } from "react";
import Loader from "../../components/Loader/Loader";
const Todos = React.lazy(() => import("../../pages/Todos/Todos"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="/todos" replace /> },
      {
        path: "/todos",
        element: (
          <Suspense fallback={<Loader />}>
            <Todos />
          </Suspense>
        ),
      },
    ],
  },
]);

export default routes;
