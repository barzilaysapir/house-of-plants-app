import express, { Router } from "express";
import * as Controller from "controllers/plants";

const router: Router = express.Router();

router.get("/:id", Controller.getPlantById);

export default router;
