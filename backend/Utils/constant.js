import dotenv from "dotenv";
dotenv.config();

export const {
  MONGO_URL,
  PORT,
  JWT_SECRET,
  FRONTEND_URL,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  RAZORPAY_KEY_ID,
  RAZORPAY_KEY_SECRET,
} = process.env;
