import express from "express";
import { getArtist } from "../controller/artistControllers.js";
const router = express.Router();

router.get("/", getArtist);

export default router;
