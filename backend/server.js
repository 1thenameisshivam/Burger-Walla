import express from "express";
import cors from "cors";
import { FRONTEND_URL, PORT } from "./Utils/constant.js";
import cookieParser from "cookie-parser";
import dbConnection from "./Utils/dbConnection.js";
import userRouter from "./Authentication/Routes/userRoutes.js";
const app = express();
app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

dbConnection();

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("Server is running on port ", PORT);
});
