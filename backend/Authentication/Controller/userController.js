import User from "../Model/userModel.js";

const userController = async (req, res) => {
  const { id } = req.user;
  if (!id) {
    return res.status(400).json({ message: "Id not found", success: false });
  }
  const user = await User.findById({ _id: id })
    .select("-password")
    .select("-_id");
  if (!user) {
    return res.status(400).json({ message: "User not found", success: false });
  }
  res.status(200).json({ user, success: true });
};

export default userController;
