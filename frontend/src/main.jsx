import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Cart from "./pages/Cart.jsx";
import Shipping from "./components/Shipping.jsx";
import ConfirmOrder from "./components/ConfirmOrder.jsx";
import PaymentSuccess from "./components/PaymentSucess.jsx";
import Profile from "./pages/Profile.jsx";
import Order from "./pages/Order.jsx";
import OrderDetailPage from "./pages/OrderDetailPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/cart/shipping",
        element: <Shipping />,
      },
      {
        path: "/cart/confirm-order",
        element: <ConfirmOrder />,
      },
      {
        path: "/cart/payment-success",
        element: <PaymentSuccess />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/:id",
        element: <OrderDetailPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
