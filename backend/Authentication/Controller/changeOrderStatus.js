import myOrderSchema from "../Model/myOrderSchema.js";
const changeOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await myOrderSchema.findById({ _id: id });
    if (!order) {
      return res
        .status(400)
        .json({ message: "Order not found", success: false });
    }
    const status = order.orderStatus;
    if (status === "Preparing") order.orderStatus = "Shipped";
    else if (status === "Shipped") {
      order.orderStatus = "Delivered";
      order.deliveredAt = new Date(Date.now());
    } else if (status === "Delivered") {
      return res
        .status(400)
        .json({ message: "Order already delivered", success: false });
    }

    await order.save();
    res.status(200).json({ message: "status updated", success: true });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", err });
  }
};

export default changeOrderStatus;
