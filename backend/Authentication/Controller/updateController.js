import burgerSchema from "../Model/burgerModel.js";
import cloudinaryUpload from "../../Utils/cloudinalryUpload.js";
import path from "node:path";
import fs from "node:fs";
const updateBurger = async (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const image = req.file;
  if (!id) {
    return res
      .status(400)
      .json({ message: "Please provide id", success: false });
  }
  let product;
  try {
    product = await burgerSchema.findById(id);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }

  if (!product) {
    return res
      .status(404)
      .json({ message: "Product not found", success: false });
  }

  let imageUrl;
  let filePath;
  if (image) {
    const filename = image.filename;
    const format = image.mimetype.split("/")[1];
    filePath = path.resolve("__dirname/../public/uploads/images/" + filename);
    try {
      imageUrl = await cloudinaryUpload(
        filePath,
        filename,
        "BurgerJPG",
        format
      );
    } catch (error) {
      return res
        .status(500)
        .json({ message: "image unable to upload cloudinary", success: false });
    }
    await fs.promises.unlink(filePath);
  }

  try {
    await burgerSchema.findByIdAndUpdate(id, {
      name,
      price,
      image: imageUrl?.secure_url ? imageUrl?.secure_url : product.image,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }

  return res.json({ message: "Burger updated successfully", success: true });
};

export default updateBurger;
