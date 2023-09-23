import express from "express";
import { getAllPlants, searchPlants } from "controllers/plants";

const router = express.Router();

router.get("/plants", getAllPlants);
router.get("/plants/search/:q", searchPlants);

export default router;
