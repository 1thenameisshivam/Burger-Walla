import myOrderSchema from "../Model/myOrderSchema.js";

const placeOrder = async (req, res) => {
  try {
    const {
      shippingInfo,
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingCharges,
      totalAmount,
    } = req.body;
    const { id } = req.user;
    const order = await myOrderSchema.create({
      shippingInfo,
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingCharges,
      totalAmount,
      user: id,
    });

    res
      .status(201)
      .json({ message: "order created sucessfully", sucess: true, order });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", err });
  }
};

export default placeOrder;
