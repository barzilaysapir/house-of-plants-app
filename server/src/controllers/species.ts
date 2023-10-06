import { Request, Response } from "express";
import * as Logic from "logic/species";

export const getSpeciesById = async (req: Request, res: Response) => {
    try {
        const species = await Logic.getSpeciesById(+req.params.id);
        res.json(species);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch species by id" });
    }
};

export const searchSpecies = async (req: Request, res: Response) => {
    try {
        const q = req.query.q as string;
        const species = await Logic.searchSpecies(q);
        res.json(species);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch species search" });
    }
};
