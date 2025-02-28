import express from "express";
import { getHomePage, getNoAuth, getBasicAuth, getApiKeyAuth, getBearerTokenAuth } from "../controllers/authController.js"

const router = express.Router();

router.get("/", getHomePage);

router.get("/noAuth", getNoAuth);

router.get("/basicAuth", getBasicAuth);

router.get("/apiKey", getApiKeyAuth);

router.get("/bearerToken", getBearerTokenAuth);

export default router;