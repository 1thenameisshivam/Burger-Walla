import myOrderSchema from "../Model/myOrderSchema.js";

const getOrderDetail = async (req, res) => {
  const { id } = req.params;
  const orders = await myOrderSchema
    .findById({ _id: id })
    .populate("user", "name");
  if (!orders) {
    return res.status(400).json({ message: "Order not found", success: false });
  }
  res.status(200).json({ orders, success: true });
};

export default getOrderDetail;
