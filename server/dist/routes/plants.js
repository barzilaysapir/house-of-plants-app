"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const plants_1 = require("controllers/plants");
const router = express_1.default.Router();
router.get("/plants", plants_1.getAllPlants);
router.get("/plants/search/:q", plants_1.searchPlants);
exports.default = router;
