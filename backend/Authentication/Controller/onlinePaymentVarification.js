import myOrderSchema from "../Model/myOrderSchema.js";
import paymentSchema from "../Model/payment.js";
import crypto from "crypto";
import { RAZORPAY_KEY_SECRET } from "../../Utils/constant.js";
const onlinePaymentVarification = async (req, res) => {
  const {
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
    orderOptions,
  } = req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  const isAuthentic = expectedSignature === razorpay_signature;
  if (!isAuthentic) {
    return res.status(400).json({ message: "Payment failed", success: false });
  }
  const payment = await paymentSchema.create({
    razorpay_payment_id,
    razorpay_order_id,
    razorpay_signature,
  });

  await myOrderSchema.create({
    ...orderOptions,
    paidAt: new Date(Date.now()),
    payment: payment._id,
  });
  res
    .status(200)
    .json({
      message: "Payment success. PaymentId:" + payment._id,
      success: true,
    });
};

export default onlinePaymentVarification;
