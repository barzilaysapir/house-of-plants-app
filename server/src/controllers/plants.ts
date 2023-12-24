import { Request, Response } from "express";
import * as Logic from "logic/plants";

export const getPlantById = async (req: Request, res: Response) => {
    try {
        const plant = await Logic.getPlantById(req.params.id);
        res.json(plant);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch plant by id" });
    }
};
