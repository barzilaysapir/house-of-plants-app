import axios from "axios";
import { Router, Request, Response } from "express";
import { BASE_URL, TREFLE_TOKEN } from "../shared/consts";
import { TrefleSpecies } from "../../../shared/species";

const router: Router = Router();
const speciesUrl = `${BASE_URL}/species`;

router.get("/", async (req: Request, res: Response) => {
    try {
        const response: TrefleSpecies = await axios.get(speciesUrl, {
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
        const response = await axios.get(speciesUrl, {
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
        const response = await axios.get(speciesUrl + "/search", {
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
