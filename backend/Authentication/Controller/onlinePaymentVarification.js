import myOrderSchema from "../Model/myOrderSchema.js";
import paymentSchema from "../Model/payment.js";
import crypto from "crypto";
import { RAZORPAY_KEY_SECRET } from "../../Utils/constant.js";
const onlinePaymentVarification = async (req, res) => {
  console.log(req.body);

  const { razorpay_payment_id, razorpay_order_id, razorpay_signature, order } =
    req.body;

  // Check if necessary data is available
  if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
    return res
      .status(400)
      .json({ message: "Missing required payment details", success: false });
  }

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  if (!isAuthentic) {
    return res
      .status(400)
      .json({ message: "Payment verification failed", success: false });
  }

  try {
    const payment = await paymentSchema.create({
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
    });

    await myOrderSchema.create({
      ...order,
      paidAt: new Date(Date.now()),
      paymentInfo: payment._id,
    });

    res.status(200).json({
      message: "Payment success. PaymentId:",
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", success: false });
  }
};

export default onlinePaymentVarification;
