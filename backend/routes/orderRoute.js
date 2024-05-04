import express from "express";
import {
  listOrders,
  placeOrder,
  updateStatus,
  userOrders,
  verifyPayment,
} from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);

orderRouter.post("/verify", verifyPayment);

orderRouter.post("/userorders", authMiddleware, userOrders);

orderRouter.get("/list", listOrders);

orderRouter.patch("/status", updateStatus);

export default orderRouter;
