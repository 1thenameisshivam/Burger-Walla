import Joi from "joi";
import { jwtSign } from "../../Utils/jwtSign.js";
import userModel from "../Model/userModel.js";
import bcrypt from "bcryptjs";

const loginSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required(),
});

const loginController = async (req, res) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: error.details[0].message, success: false });
  }
  let user;
  try {
    user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found", success: false });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res
      .status(400)
      .json({ message: "Invalid password", success: false });
  }
  const token = jwtSign({ id: user._id, name: user.name, role: user.role });
  res.cookie("token", token, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });

  res.status(200).json({ message: "Login successful", success: true });
};

export default loginController;
