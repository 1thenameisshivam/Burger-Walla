import express from "express";
import addBurger from "../Controller/addBurger.js";
import Authorised from "../../Middleware/Authorised.js";
import Authenticate from "../../Middleware/Authenticate.js";
import getAllBurger from "../Controller/getAllBurger.js";
import upload from "../../Middleware/Multer.js";
import deleteBurger from "../Controller/deleteBurger.js";
import updateBurger from "../Controller/updateController.js";
const burgerRoute = express.Router();

burgerRoute.post(
  "/add",
  [Authenticate, Authorised, upload.single("image")],
  addBurger
);
burgerRoute.get("/", getAllBurger);
burgerRoute.put(
  "/update/:id",
  [Authenticate, Authorised, upload.single("image")],
  updateBurger
);
burgerRoute.delete("/delete/:id", [Authenticate, Authorised], deleteBurger);

export default burgerRoute;
