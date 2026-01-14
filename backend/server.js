import dotenv from "dotenv";
dotenv.config();

console.log("ENV PATH:", process.cwd());
console.log("JWT_SECRET value:", process.env.JWT_SECRET);

import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

console.log("JWT_SECRET:", process.env.JWT_SECRET);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

if (!process.env.JWT_SECRET) {
  console.error("❌ JWT_SECRET is missing");
  process.exit(1);
}
