"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const genus_1 = require("controllers/genus");
const router = express_1.default.Router();
router.get("/genus", genus_1.getAllGenuses);
router.get("/genus/:id", genus_1.getGenusById);
router.get("/genus/search/:q", genus_1.searchGenuses);
exports.default = router;
