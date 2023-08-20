import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contactus from "./components/Contactus/Contactus.jsx";
import First from "./components/first/First.jsx";
import Friends from "./components/Friends/Friends.jsx";
import FriendDetails from "./components/FriendDetails/FriendDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <First />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contactus />,
      },
      {
        path: "/friends",
        element: <Friends />,
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
      },
      {
        path: "/fdetails/:friendId",
        element: <FriendDetails />,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
