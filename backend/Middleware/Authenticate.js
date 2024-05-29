import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../Utils/constant.js";

const Authenticate = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res
      .status(401)
      .json({ message: "User not logged In", success: false });
  }

  try {
    const decodedData = jwt.verify(token, JWT_SECRET);
    req.user = decodedData;
    next();
  } catch (error) {
    return res
      .status(401)
      .json({ message: "User not logged In", success: false });
  }
};

export default Authenticate;
