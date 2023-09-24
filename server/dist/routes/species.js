"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const species_1 = require("controllers/species");
const router = express_1.default.Router();
router.get("/search", species_1.searchSpecies);
router.get("/:id", species_1.getSpeciesById);
router.get("/", species_1.getAllSpecies);
exports.default = router;
