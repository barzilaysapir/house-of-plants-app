import { Request, Response } from "express";
import { fetchAllPlants, fetchPlantsSearch } from "logic/plants";

export const getAllPlants = async (req: Request, res: Response) => {
    try {
        const plants = await fetchAllPlants();
        res.json(plants);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch plants" });
    }
};

export const searchPlants = async (req: Request, res: Response) => {
    try {
        const plants = await fetchPlantsSearch(req.params.q);
        res.json(plants);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch plants search" });
    }
};
