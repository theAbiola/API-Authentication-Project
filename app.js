import express from "express";
import env from "dotenv";
import authRoutes from "./routes/authRoutes.js";

env.config();
const app = express();
const port = 3000;

app.use(authRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
