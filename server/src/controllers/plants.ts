import { Request, Response } from "express";
import * as Logic from "logic/plants";

export const getPlantById = async (req: Request, res: Response) => {
    try {
        const specie = await Logic.getPlantById(req.params.id);
        res.json(specie);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch plant by id" });
    }
};
