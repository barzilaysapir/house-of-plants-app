import express, { Router } from "express";
import { getAllPlants, searchPlants } from "controllers/plants";

const router: Router = express.Router();

router.use("/search/:q", searchPlants);
router.use("/", getAllPlants);

export default router;
