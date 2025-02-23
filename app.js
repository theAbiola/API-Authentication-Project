import express from "express";
import axios from "axios";
import env from "dotenv";

const app = express();
const port = 3000;
env.config();
const API_URL = process.env.SECRETS_API_URL;

const ourUsername = process.env.SECRETS_API_USERNAME;
const ourPassword = process.env.SECRETS_API_PASSWORD;
const ourAPIKey = process.env.SECRETS_API_KEY;
const ourBearerToken = process.env.SECRETS_API_BEARER_TOKEN;

app.get("/",);

app.get("/noAuth",);

app.get("/basicAuth",);

app.get("/apiKey",);

app.get("/bearerToken",);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
