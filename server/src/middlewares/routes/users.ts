import {
    addUser,
    googleUserAuth,
    getAllUsers,
    getUsersById,
} from "controllers/users";
import express, { Router } from "express";

const router: Router = express.Router();

router.use("/add", addUser);
router.use("/auth", googleUserAuth);

router.use("/me", async (req: any, res) => {
    // res.json(req.user);
});

router.use("/:id", getUsersById);
router.use("/", getAllUsers);

export default router;
