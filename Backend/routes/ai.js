import express from "express";
import { generateStudyMaterial } from "../controllers/aiController.js";

const router = express.Router();

router.post("/generate", generateStudyMaterial);

export default router;