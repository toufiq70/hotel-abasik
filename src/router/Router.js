// @ts-nocheck
import { createBrowserRouter } from "react-router-dom";
import Rooot from "../layout/Root/Rooot";
import About from "../pages/about/About";
import Contact from "../pages/Contact/Contact";
import HomePage from "../pages/Home/HomePage/HomePage";
import HotelRoom from "../pages/HotelRoom/HotelRoom";
import Login from "../pages/Login/Login";
import Orders from "../pages/Orders/Orders";
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRouter/PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Rooot />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/room",
        element: (
          <PrivateRoute>
            <HotelRoom />
          </PrivateRoute>
        ),
      },
      {
        path: "/orders",
        element: (
          <PrivateRoute>
            {" "}
            <Orders />{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
export default routes;
