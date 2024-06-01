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
import CheckAuth from "./Utils/CheckAuth.js";
import AddBurger from "./pages/AddBurger.jsx";
import AllBurger from "./pages/AllBurger.jsx";

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

        element: (
          <CheckAuth>
            <Cart />
          </CheckAuth>
        ),
      },
      {
        path: "/cart/shipping",
        element: (
          <CheckAuth>
            <Shipping />
          </CheckAuth>
        ),
      },
      {
        path: "/cart/confirm-order",
        element: (
          <CheckAuth>
            <ConfirmOrder />
          </CheckAuth>
        ),
      },
      {
        path: "/cart/payment-success",
        element: (
          <CheckAuth>
            <PaymentSuccess />
          </CheckAuth>
        ),
      },
      {
        path: "/profile",
        element: (
          <CheckAuth>
            <Profile />
          </CheckAuth>
        ),
      },
      {
        path: "/order",
        element: (
          <CheckAuth>
            <Order />
          </CheckAuth>
        ),
      },
      {
        path: "/order/:id",
        element: (
          <CheckAuth>
            <OrderDetailPage />
          </CheckAuth>
        ),
      },
      {
        path: "/dasboard",
        element: (
          <CheckAuth adminOnly={true}>
            <Dashboard />
          </CheckAuth>
        ),
      },
      {
        path: "/dasboard/add",
        element: (
          <CheckAuth adminOnly={true}>
            <AddBurger />
          </CheckAuth>
        ),
      },
      {
        path: "/dasboard/burgers",
        element: (
          <CheckAuth adminOnly={true}>
            <AllBurger />
          </CheckAuth>
        ),
      },
      {
        path: "/admin/users",
        element: (
          <CheckAuth>
            <Users />
          </CheckAuth>
        ),
      },
      {
        path: "/admin/orders",
        element: (
          <CheckAuth>
            <AdminOrders />
          </CheckAuth>
        ),
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
