import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: (
      <>
        <header>
          <h1>w0ah dude...</h1>
        </header>
        <main>
          <p>this page is like, totally unfinished, or something.</p>
          <p>
            come back later to see me{" "}
            {
              [
                "do ballet",
                "make waffles",
                "play the drums",
                "set my kitchen on fire",
              ][Math.floor(Math.random() * 4)]
            }
            !!1!
          </p>
        </main>
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <footer>
      <p>
        &#169; Clover Johnson •{" "}
        <a href="mailto:callmeclover@clovr.rocks">send me an email</a> •{" "}
        <a href="https://github.com/callmeclover/">my github</a>
      </p>
    </footer>
  </StrictMode>
);
