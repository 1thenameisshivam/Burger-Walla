import userSchema from "../Model/userModel.js";
import myOrderSchema from "../Model/myOrderSchema.js";

const getStats = async (req, res) => {
  const users = await userSchema.countDocuments();

  const orders = await myOrderSchema.find({});

  const prepearingOrder = orders.filter(
    (order) => order.orderStatus === "Preparing"
  ).length;
  const deliveredOrder = orders.filter(
    (order) => order.orderStatus === "Delivered"
  ).length;
  const shippedOrder = orders.filter(
    (order) => order.orderStatus === "Shipped"
  ).length;

  const totalAmount = orders.reduce((acc, order) => acc + order.totalAmount, 0);

  res.status(200).json({
    users,
    orders: orders.length,
    prepearingOrder,
    deliveredOrder,
    shippedOrder,
    totalAmount,
  });
};

export default getStats;
