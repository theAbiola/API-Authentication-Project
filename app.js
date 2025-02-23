import express from "express";
import env from "dotenv";

env.config();
const app = express();
const port = 3000;



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
