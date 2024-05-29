import burgerSchema from "../Model/burgerModel.js";
import cloudinaryUpload from "../../Utils/cloudinalryUpload.js";
import Joi from "joi";
import fs from "node:fs";
import path from "node:path";
const schema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
});
const addBurger = async (req, res) => {
  const { name, price } = req.body;
  const image = req.file;

  const { error } = schema.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ message: error.details[0].message, success: false });
  }
  if (!image) {
    return res
      .status(400)
      .json({ message: "Please upload image", success: false });
  }
  const { filename } = req.file;
  const filePath = path.resolve(
    "__dirname/../public/uploads/images/" + filename
  );
  const format = image.mimetype.split("/")[1];
  const { secure_url } = await cloudinaryUpload(
    filePath,
    filename,
    "BurgerJPG",
    format
  );

  try {
    const data = await burgerSchema.create({
      name,
      price,
      image: secure_url,
    });
  } catch (error) {
    res.status(500).json({
      message: error,
      sucess: false,
    });
  }

  try {
    await fs.promises.unlink(filePath);
  } catch (err) {
    res.status(500).jason({
      message: "file is uploded but unable to delete from server",
      sucess: false,
    });
  }

  return res.json({ message: "new burger created sucessfully", sucess: true });
};

export default addBurger;
