import { RAZORPAY_KEY_ID } from "../../Utils/constant.js";

const sendKey = async (req, res) => {
  res.status(200).json({ key: RAZORPAY_KEY_ID });
};
export default sendKey;
