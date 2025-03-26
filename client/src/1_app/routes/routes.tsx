import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../2_pages/Layout/Layout";
import AllTodos from "../../2_pages/Todos/Todos";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to={"/todos"} replace /> },
      { path: "/todos", element: <AllTodos /> },
    ],
  },
]);

export default routes;
