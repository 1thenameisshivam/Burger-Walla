import userSchema from "../Model/userModel.js";
const getAllUsers = async (req, res) => {
  try {
    const data = await userSchema.find({}).select("-password");
    res.status(200).json({ data, status: true });
  } catch (error) {
    res.status(500).json({ message: "Server Error", status: false });
  }
};

export default getAllUsers;
