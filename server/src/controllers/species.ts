import { Request, Response } from "express";
import {
    fetchAllSpecies,
    fetchSpeciesById,
    fetchSpeciesSearch,
} from "logic/species";

export const getAllSpecies = async (req: Request, res: Response) => {
    try {
        const species = await fetchAllSpecies();
        res.json(species);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch species" });
    }
};

export const getSpeciesById = async (req: Request, res: Response) => {
    try {
        const species = await fetchSpeciesById(+req.params.id);
        res.json(species);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch species by id" });
    }
};

export const searchSpecies = async (req: Request, res: Response) => {
    try {
        const species = await fetchSpeciesSearch(req.params.q);
        res.json(species);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch species search" });
    }
};
