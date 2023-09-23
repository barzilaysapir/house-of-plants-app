import axios, { AxiosResponse } from "axios";
import { Router, Request, Response } from "express";

const router: Router = Router();
const TREFLE_TOKEN = "0rb0D_osH3J27ZVWN8CWNrpv1o-2zKP_aPfXtnq0mgY";
const BASE_URL = `https://trefle.io/api/v1/genus?token=${TREFLE_TOKEN}`;
const OPTIONS = {
    params: {
        token: TREFLE_TOKEN,
    },
};

router.get("/", async (req: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get(BASE_URL, OPTIONS);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genus" });
    }
});

router.get("/id", async ({ params }: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get(
            `${BASE_URL}/${params.id}`,
            OPTIONS
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genus abies alba" });
    }
});

router.get("/search/:q", async ({ params }: Request, res: Response) => {
    try {
        const response: AxiosResponse = await axios.get(
            `${BASE_URL}/search?q=${params.q}`,
            OPTIONS
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genus search" });
    }
});

export default router;
