import express from "express";
import { getAllGenuses, getGenusById, searchGenuses } from "controllers/genus";
import { getAllPlants, searchPlants } from "controllers/plants";
import {
    getAllSpecies,
    getSpeciesById,
    searchSpecies,
} from "controllers/species";

const router = express.Router();

router.get("/genus/", getAllGenuses);
router.get("/genus/:id", getGenusById);
router.get("/genus/search/:q", searchGenuses);

router.get("/plants/", getAllPlants);
router.get("/plants/search/:q", searchPlants);

router.get("/species/", getAllSpecies);
router.get("/species/:id", getSpeciesById);
router.get("/species/search/:q", searchSpecies);

export default router;
