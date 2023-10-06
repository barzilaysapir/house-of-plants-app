import express, { Router } from "express";
import * as Controller from "controllers/species";

const router: Router = express.Router();

router.get("/search", Controller.searchSpecies);
router.get("/:id", Controller.getSpeciesById);

export default router;
