import { Request, Response } from "express";
import { fetchAddUser, fetchAllUsers, fetchUserById } from "logic/users";

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await fetchAllUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch users" });
    }
};

export const getUsersById = async (req: Request<any>, res: Response) => {
    try {
        const user = await fetchUserById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch user by id" });
    }
};

export const addUser = async (req: Request, res: Response) => {
    try {
        const users = await fetchAddUser(req.body);
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: "Failed to add user" });
    }
};
