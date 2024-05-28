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
import Dashboard from "./components/Dashboard.jsx";
import Users from "./components/Users.jsx";
import AdminOrders from "./components/AdminOrders.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import store from "./redux/appStore.js";
import { Provider } from "react-redux";
import checkAuth from "./Utils/checkAuth.js";
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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        loader: checkAuth,
        element: <Cart />,
      },
      {
        path: "/cart/shipping",
        loader: checkAuth,
        element: <Shipping />,
      },
      {
        path: "/cart/confirm-order",
        loader: checkAuth,
        element: <ConfirmOrder />,
      },
      {
        path: "/cart/payment-success",
        loader: checkAuth,
        element: <PaymentSuccess />,
      },
      {
        path: "/profile",
        loader: checkAuth,
        element: <Profile />,
      },
      {
        path: "/order",
        loader: checkAuth,
        element: <Order />,
      },
      {
        path: "/order/:id",
        loader: checkAuth,
        element: <OrderDetailPage />,
      },
      {
        path: "/dashboard",
        loader: checkAuth,
        element: <Dashboard />,
      },
      {
        path: "/admin/users",
        loader: checkAuth,
        element: <Users />,
      },
      {
        path: "/admin/orders",
        loader: checkAuth,
        element: <AdminOrders />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
