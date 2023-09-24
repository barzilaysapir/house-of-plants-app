import { Request, Response } from "express";
import {
    fetchAllGenuses,
    fetchGenusById,
    fetchGenusesSearch,
} from "logic/genus";

export const getAllGenuses = async (req: Request, res: Response) => {
    try {
        const genuses = await fetchAllGenuses();
        res.json(genuses);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genuses" });
    }
};

export const getGenusById = async (req: Request, res: Response) => {
    try {
        const genus = await fetchGenusById(+req.params.id);
        res.json(genus);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genus by id" });
    }
};

export const searchGenuses = async (req: Request, res: Response) => {
    try {
        const q = req.query.q as string;
        const genuses = await fetchGenusesSearch(q);
        res.json(genuses);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch genuses search" });
    }
};
