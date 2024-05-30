import express from "express";
import Authenticate from "../../Middleware/Authenticate.js";
import placeOrder from "../Controller/placeOrder.js";
import findMyOrders from "../Controller/findMyOrders.js";
import getOrderDetail from "../Controller/getOrderDetail.js";
import getAdminOrder from "../Controller/getAdminOrder.js";
import Authorised from "../../Middleware/Authorised.js";
import changeOrderStatus from "../Controller/changeOrderStatus.js";
import createOrderOnline from "../Controller/createOrderOnline.js";
import onlinePaymentVarification from "../Controller/onlinePaymentVarification.js";
const orderRoute = express.Router();

orderRoute.post("/", Authenticate, placeOrder);
orderRoute.post("/placeorder", Authenticate, createOrderOnline);
orderRoute.post("/payment", Authenticate, onlinePaymentVarification);
orderRoute.get("/", Authenticate, findMyOrders);
orderRoute.get("/detail/:id", Authenticate, getOrderDetail);
orderRoute.get("/admin", Authenticate, Authorised, getAdminOrder);
orderRoute.get("/status/:id", Authenticate, Authorised, changeOrderStatus);

export default orderRoute;
