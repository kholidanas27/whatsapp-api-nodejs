import express from "express";
import db from "./config/database.js";
// import userRoutes from "./routes/index.js";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
dotenv.config();

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.use(cors());
app.use(express.json());

app.listen(5000, () => console.log("Server running at port 5000"));