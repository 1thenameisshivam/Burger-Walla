const Authorised = (req, res, next) => {
  const { role } = req.user;
  if (role !== "admin") {
    return res
      .status(401)
      .json({ message: "User not authorised", success: false });
  }
  next();
};
export default Authorised;
