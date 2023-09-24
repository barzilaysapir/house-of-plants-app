import express from "express";
import { getAllPlants, searchPlants } from "controllers/plants";

const router = express.Router();

router.get("/search/:q", searchPlants);
router.get("/", getAllPlants);

export default router;
