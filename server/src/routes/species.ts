import axios from "axios";
import { Router, Request, Response } from "express";

const router: Router = Router();
const TREFLE_TOKEN = "0rb0D_osH3J27ZVWN8CWNrpv1o-2zKP_aPfXtnq0mgY";
const BASE_URL = `https://trefle.io/api/v1/species`;

router.get("/", async (req: Request, res: Response) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                token: TREFLE_TOKEN,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch species" });
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const response = await axios.get(BASE_URL, {
            params: {
                token: TREFLE_TOKEN,
                id: req.params.id,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch species by id" });
    }
});

router.get("/search/:q", async (req: Request, res: Response) => {
    try {
        const response = await axios.get(BASE_URL + "/search", {
            params: {
                token: TREFLE_TOKEN,
                q: req.params.q,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch species search" });
    }
});

export default router;
