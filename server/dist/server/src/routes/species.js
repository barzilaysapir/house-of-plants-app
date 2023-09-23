"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const consts_1 = require("../shared/consts");
const router = (0, express_1.Router)();
const speciesUrl = `${consts_1.BASE_URL}/species`;
router.get("/", async (req, res) => {
    try {
        const response = await axios_1.default.get(speciesUrl, {
            params: {
                token: consts_1.TREFLE_TOKEN,
            },
        });
        res.json(response.data);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch species" });
    }
});
router.get("/:id", async (req, res) => {
    try {
        const response = await axios_1.default.get(speciesUrl, {
            params: {
                token: consts_1.TREFLE_TOKEN,
                id: req.params.id,
            },
        });
        res.json(response.data);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch species by id" });
    }
});
router.get("/search/:q", async (req, res) => {
    try {
        const response = await axios_1.default.get(speciesUrl + "/search", {
            params: {
                token: consts_1.TREFLE_TOKEN,
                q: req.params.q,
            },
        });
        res.json(response.data);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch species search" });
    }
});
exports.default = router;
