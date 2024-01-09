import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./modules/App.jsx";
import "./index.css";

window.onerror = (e, s, l, c, err) => {
  window.alert(`${s} at ${l}:${c}; ${err}`);
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <main className="mainContainer">
  <RouterProvider router={router} />
    </main>
  </React.StrictMode>
);