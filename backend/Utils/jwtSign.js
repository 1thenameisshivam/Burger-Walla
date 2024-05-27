import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./constant.js";
export const jwtSign = (data) => {
  return jwt.sign(data, JWT_SECRET, { expiresIn: "3d" });
};
