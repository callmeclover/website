import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: (<>
      <p>whoops sorry im still making everything.</p>
      <p>every page will be 404s until listed as completed</p></>
    )
  },
  {
    path: "*",
    element: (
      <>
        <h1>w0ah dude...</h1>
        <p>this page is like, totally unfinished, or something.</p>
        <p>come back later to see me {["do ballet", "make waffles", "play the drums", "set my kitchen on fire"][Math.floor(Math.random() * 4)]}!!1!</p>
      </>
    ),
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
