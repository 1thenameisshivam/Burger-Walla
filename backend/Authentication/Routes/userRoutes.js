import express from "express";
import registerController from "../Controller/registerController.js";
import loginController from "../Controller/loginController.js";
import userController from "../Controller/userController.js";
import Authenticate from "../../Middleware/Authenticate.js";
const userRouter = express.Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.get("/user", Authenticate, userController);
export default userRouter;
