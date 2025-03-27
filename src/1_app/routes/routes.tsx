import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../2_pages/Layout/Layout";
import React, { Suspense } from "react";
import Loader from "../../3_components/Loader/Loader";
const Todos = React.lazy(() => import("../../2_pages/Todos/Todos"));

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to={"/todos"} replace /> },
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
