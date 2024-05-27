import express from "express";
import registerController from "../Controller/registerController.js";
import loginController from "../Controller/loginController.js";
const userRouter = express.Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
export default userRouter;
