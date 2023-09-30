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
        const response = await Logic.googleUserAuth(req.headers.authorization!);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch google auth" });
    }
};

export const getUsersById = async (req: Request<any>, res: Response) => {
    try {
        const user = await Logic.fetchUserById(req.params.id, req.body);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user by id" });
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
