import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRuter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import "dotenv/config.js";

// App Config
const app = express();
const port = 4000;

// Middleware
app.use(express.json()); // To parse front-end request
app.use(cors());

// DB Connection
connectDB();

// API Endpoints
app.use("/api/food", foodRuter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("api//cart", cartRouter);

app.get("/", (req, res) => {
  res.status(200).send("API Working");
});

app.listen(port, () => {
  console.log(`Server is started on http://localhost: ${port}`);
});
