import express from "express";
import { connectDB } from "./config/connectDB.js";
import "dotenv/config";

const app = express();

//.ENV imports
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on http://localhost:${PORT}`);
});
