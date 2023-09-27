import { addUser, getAllUsers, getUsersById } from "controllers/users";
import express, { Router } from "express";

const router: Router = express.Router();

router.use("/add", addUser);
router.use("/:id", getUsersById);
router.use("/", getAllUsers);

export default router;
