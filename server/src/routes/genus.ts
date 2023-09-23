import axios, { AxiosResponse } from "axios";
import { Router, Request, Response } from "express";
import { BASE_URL, TREFLE_TOKEN } from "../shared/consts";

const router: Router = Router();
const genusUrl = `${BASE_URL}/genus`;

router.get("/", async (req: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get(genusUrl, {
            params: {
                token: TREFLE_TOKEN,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genus" });
    }
});

router.get("/:id", async (req: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get(genusUrl, {
            params: {
                token: TREFLE_TOKEN,
                id: req.params.id,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genus by ID" });
    }
});

router.get("/search/:q", async (req: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get(genusUrl + "/search", {
            params: {
                token: TREFLE_TOKEN,
                q: req.params.q,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genus search" });
    }
});

export default router;
