import express from "express";
import {
    getAllSpecies,
    getSpeciesById,
    searchSpecies,
} from "controllers/species";

const router = express.Router();

router.get("/species", getAllSpecies);
router.get("/species/:id", getSpeciesById);
router.get("/species/search/:q", searchSpecies);

export default router;
