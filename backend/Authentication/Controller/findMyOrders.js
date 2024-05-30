import myOrderSchema from "../Model/myOrderSchema.js";

const findMyOrders = async (req, res) => {
  try {
    const { id } = req.user;
    const orders = await myOrderSchema
      .find({ user: id })
      .populate("user", "name");
    res.status(200).json({ orders, success: true });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", err });
  }
};

export default findMyOrders;
