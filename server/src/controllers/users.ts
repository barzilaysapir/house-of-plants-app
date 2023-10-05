import { Request, Response } from "express";
import * as Logic from "logic/users";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await Logic.fetchAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
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

export const getUsersById = async (req: Request<any>, res: Response) => {
    try {
        const user = await Logic.fetchUserById(req.params.id);
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

export const addUsersPlant = async (req: Request<any>, res: Response) => {
    try {
        const addRes = await Logic.addUsersPlant(
            req.params.userId,
            req.body.plant
        );
        res.json(addRes);
    } catch (error) {
        res.status(500).json({ error: "Failed to add user's plant" });
    }
};

export const addUser = async (req: Request, res: Response) => {
    try {
        const users = await Logic.fetchAddUser(req.body);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to add user" });
    }
};
