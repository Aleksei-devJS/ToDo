import React from "react";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";

function App(): React.JSX.Element {
  return <RouterProvider router={routes} />;
}

export default App;
