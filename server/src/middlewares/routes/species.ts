import express, { Router } from "express";
import {
    getAllSpecies,
    getSpeciesById,
    searchSpecies,
} from "controllers/species";

const router: Router = express.Router();

router.use("/search", searchSpecies);
router.use("/:id", getSpeciesById);
router.use("/", getAllSpecies);

export default router;
