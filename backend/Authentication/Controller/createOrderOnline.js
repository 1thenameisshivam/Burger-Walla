import instance from "../../Utils/RazorpayIns.js";
const createOrderOnline = async (req, res) => {
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
    const order = {
      shippingInfo,
      orderItems,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingCharges,
      totalAmount,
      user: id,
    };
    const options = {
      amount: Number(totalAmount) * 100, // amount in smallest currency unit
      currency: "INR",
    };
    const response = await instance.orders.create(options);
    res.status(201).json({
      message: "order created sucessfully",
      sucess: true,
      response,
      order,
      success: true,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal server error", err });
  }
};

export default createOrderOnline;
