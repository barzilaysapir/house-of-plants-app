import express from "express";
import {
    getAllSpecies,
    getSpeciesById,
    searchSpecies,
} from "controllers/species";

const router = express.Router();

router.get("/search", searchSpecies);
router.get("/:id", getSpeciesById);
router.get("/", getAllSpecies);

export default router;
