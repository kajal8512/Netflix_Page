import "./App.css";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Headers from "./Component/Header/Headers.js";
import Login from "./Component/Login/LoginPage.js";
import Home from "./Component/Home.jsx";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Headers />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/movie",
          element: <Home />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
