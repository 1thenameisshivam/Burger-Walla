import express from "express";
import registerController from "../Controller/registerController.js";
import loginController from "../Controller/loginController.js";
import userController from "../Controller/userController.js";
import Authenticate from "../../Middleware/Authenticate.js";
import getAllUsers from "../Controller/getAllUsers.js";
import Authorised from "../../Middleware/Authorised.js";
import getStats from "../Controller/getStats.js";
const userRouter = express.Router();

userRouter.post("/register", registerController);
userRouter.post("/login", loginController);
userRouter.get("/user", Authenticate, userController);
userRouter.get("/all-users", [Authenticate, Authorised], getAllUsers);
userRouter.get("/stats", [Authenticate, Authorised], getStats);
export default userRouter;
