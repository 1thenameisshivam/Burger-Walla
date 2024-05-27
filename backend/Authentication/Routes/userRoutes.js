import express from "express";
import registerController from "../Controller/registerController.js";
const userRouter = express.Router();

userRouter.post("/register", registerController);

export default userRouter;
