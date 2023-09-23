"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express_1 = require("express");
const router = (0, express_1.Router)();
const TREFLE_TOKEN = "0rb0D_osH3J27ZVWN8CWNrpv1o-2zKP_aPfXtnq0mgY";
const BASE_URL = `https://trefle.io/api/v1/plants`;
router.get("/", async (req, res) => {
    try {
        const response = await axios_1.default.get(BASE_URL, {
            params: {
                token: TREFLE_TOKEN,
            },
        });
        res.json(response.data);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch plants" });
    }
});
router.get("/search/:q", async (req, res) => {
    try {
        const response = await axios_1.default.get(BASE_URL + "/search", {
            params: {
                token: TREFLE_TOKEN,
                q: req.params.q,
            },
        });
        res.json(response.data);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch plants" });
    }
});
exports.default = router;
