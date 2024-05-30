import myOrderSchema from "../Model/myOrderSchema.js";

const getAdminOrder = async (req, res) => {
  try {
    console.log("Fetching admin orders...");
    const orders = await myOrderSchema.find({});
    //   .populate("user", "name");
    console.log("Fetched orders:", orders);
    res.status(200).json({ orders, success: true });
  } catch (err) {
    console.error("Error fetching admin orders:", err);
    res
      .status(500)
      .json({ success: false, message: "Internal server error", err });
  }
};

export default getAdminOrder;
