import express from "express";
import addBurger from "../Controller/addBurger.js";
const burgerRoute = express.Router();

burgerRoute.post("/add", addBurger);

export default burgerRoute;
