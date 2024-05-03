import express from "express";
import { placeOrder } from "../controllers/orderController";
import authMiddleware from "../middleware/auth";

const orderRouter = express.Router();

orderRouter.post("/", authMiddleware, placeOrder);

export default orderRouter;
