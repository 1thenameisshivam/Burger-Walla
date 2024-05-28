import userModel from "../Model/userModel.js";
import bcrypt from "bcryptjs";
import { jwtSign } from "../../Utils/jwtSign.js";
import Joi from "joi";

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

export const registerController = async (req, res) => {
  const { email, name, password } = req.body;
  const { error } = registerSchema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ message: error.details[0].message, sucess: false });
  }

  const user = await userModel.findOne({ email });
  if (user) {
    return res
      .status(400)
      .json({ message: "User already exists", sucess: false });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  let newUser;
  try {
    newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }

  const token = jwtSign({
    id: newUser._id,
    name: newUser.name,
    role: newUser.role,
  });

  res.cookie("token", token, {
    httpOnly: false,
    sameSite: "strict",
    maxAge: 3 * 24 * 60 * 60 * 1000,
  });

  res.status(201).json({
    message: "User created successfully",
    success: true,
  });
};

export default registerController;
