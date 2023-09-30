import {
    addUser,
    googleUserAuth,
    getAllUsers,
    getUsersById,
} from "controllers/users";
import express, { Router } from "express";

const router: Router = express.Router();

router.post("/add", addUser);
router.post("/auth", googleUserAuth);
router.get("/:id", getUsersById);
router.get("/", getAllUsers);

export default router;
