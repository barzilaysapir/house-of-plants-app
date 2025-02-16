import { Request, Response } from "express";
import { getSpeciesById } from "logic/species";
import * as Logic from "logic/users";

export const getUserById = async (req: Request<any>, res: Response) => {
    try {
        const user = await Logic.getUserById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user by id" });
    }
};

export const getUsersPlants = async (req: Request<any>, res: Response) => {
    try {
        const usersPlants = await Logic.getUsersPlants(req.params.id);
        res.json(usersPlants);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user's plants" });
    }
};

export const getUserSites = async (req: Request<any>, res: Response) => {
    try {
        const userSites = await Logic.getUserSites(req.params.id);
        res.json(userSites);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user's plants" });
    }
};

export const googleUserAuth = async (req: Request<any>, res: Response) => {
    try {
        const authRes = await Logic.googleUserAuth(req.headers.authorization!);
        res.json(authRes);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch google auth" });
    }
};

export const addUsersPlant = async (req: Request<any>, res: Response) => {
    try {
        const plant = await getSpeciesById(req.body.species.id);
        const addRes = await Logic.addUsersPlant(req.params.id, plant);
        res.json(addRes);
    } catch (error) {
        res.status(500).json({ error: "Failed to add user's plant" });
    }
};

export const addUserSite = async (req: Request<any>, res: Response) => {
    try {
        const addRes = await Logic.addUserSite(req.params.id, req.body);
        res.json(addRes);
    } catch (error) {
        res.status(500).json({ error: "Failed to add user's site" });
    }
};

export const deleteUserSite = async (req: Request<any>, res: Response) => {
    try {
        const deleteRes = await Logic.deleteUserSite(
            req.params.id,
            req.params.siteId
        );
        res.json(deleteRes);
    } catch (error) {
        res.status(500).json({ error: "Failed to delete user's site" });
    }
};
