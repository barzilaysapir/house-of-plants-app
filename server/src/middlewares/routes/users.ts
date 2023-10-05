import {
    addUser,
    googleUserAuth,
    getAllUsers,
    getUsersById,
    addUsersPlant,
    getUsersPlants,
} from "controllers/users";
import express, { Router } from "express";

const router: Router = express.Router();

router.post("/add", addUser);
router.post("/auth", googleUserAuth);
router.post("/:userId/addPlant/:plantId", addUsersPlant);
router.get("/:id/plants", getUsersPlants);
router.get("/:id", getUsersById);
router.get("/", getAllUsers);

export default router;
