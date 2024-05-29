import burgerSchema from "../Model/burgerModel.js";
import cloudinary from "../../Utils/cloudinaryConfig.js";
const deleteBurger = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res
      .status(400)
      .json({ message: "Please provide id", success: false });
  }

  const burger = await burgerSchema.findById(id);
  if (!burger) {
    return res
      .status(404)
      .json({ message: "Burger not found", success: false });
  }
  const burgerImage = burger.image.split("/");
  const burgerImagePublicId =
    burgerImage.at(-2) + "/" + burgerImage.at(-1)?.split(".").at(-2);
  try {
    await cloudinary.uploader.destroy(burgerImagePublicId);
  } catch (err) {
    res
      .status(500)
      .json({ message: "unable to delete from cloudinary", sucess: false });
  }
  try {
    await burgerSchema.deleteOne({ _id: id });
  } catch (err) {
    res.status(500).json({ message: "unable to delete", sucess: false });
  }
  res
    .status(200)
    .json({ message: burger.name + " deleted sucessfully", sucess: true });
};

export default deleteBurger;
