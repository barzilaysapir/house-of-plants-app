import axios from "axios";
import { Router, Request, Response } from "express";
import { BASE_URL, TREFLE_TOKEN } from "../shared/consts";

const router: Router = Router();
const plantsUrl = `${BASE_URL}/plants`;

router.get("/", async (req: Request, res: Response) => {
    try {
        const response = await axios.get(plantsUrl, {
            params: {
                token: TREFLE_TOKEN,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch plants" });
    }
});

router.get("/search/:q", async (req: Request, res: Response) => {
    try {
        const response = await axios.get(plantsUrl + "/search", {
            params: {
                token: TREFLE_TOKEN,
                q: req.params.q,
            },
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch plants" });
    }
});

export default router;
