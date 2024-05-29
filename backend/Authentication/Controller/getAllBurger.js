import burgerSchema from "../Model/burgerModel.js";

const getAllBurger = async (req, res) => {
  try {
    const burgers = await burgerSchema.find({});
    res.status(200).json({ burgers, success: true });
  } catch (error) {
    res.status(500).json({ message: error, success: false });
  }
};

export default getAllBurger;
