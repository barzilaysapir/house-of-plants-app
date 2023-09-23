const express = require("express");
const axios = require("axios");

const router = express.Router();
const TREFLE_TOKEN = "0rb0D_osH3J27ZVWN8CWNrpv1o-2zKP_aPfXtnq0mgY";
const options = {
    params: {
        token: TREFLE_TOKEN,
    },
};

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(
            "https://trefle.io/api/v1/genus?token=${TREFLE_TOKEN}",
            options
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genus" });
    }
});

router.get("/id", async ({ params: { id = "abies-alba" } }, res) => {
    try {
        const response = await axios.get(
            `https://trefle.io/api/v1/genus/${id}&token=${TREFLE_TOKEN}`,
            options
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genus abies alba" });
    }
});

router.get("/search/:q", async ({ params: { q } }, res) => {
    try {
        const response = await axios.get(
            `https://trefle.io/api/v1/genus/search?q=${q}&token=${TREFLE_TOKEN}`,
            options
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genus search" });
    }
});

module.exports = router;
