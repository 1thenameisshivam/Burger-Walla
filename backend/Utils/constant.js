import dotenv from "dotenv";
dotenv.config();

export const { MONGO_URL, PORT, JWT_SECRET, FRONTEND_URL } = process.env;
