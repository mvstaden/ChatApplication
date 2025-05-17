import express from "express";
import { connectDB } from "./config/connectDB.js";
import "dotenv/config";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app, server } from "./lib/socket.js";

import authRoutes from "./routes/authRoute.js";
import messageRoutes from "./routes/messageRoute.js";

//? ENV imports
const PORT = process.env.PORT || 5001;

//? Middleware
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//? Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
