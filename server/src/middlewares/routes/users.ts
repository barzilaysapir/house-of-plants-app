import * as Controller from "controllers/users";
import express, { Router } from "express";

const router: Router = express.Router();

router.post("/auth", Controller.googleUserAuth);
router.post("/:id/addPlant", Controller.addUsersPlant);

router.get("/:id/plants", Controller.getUsersPlants);
router.get("/:id/sites", Controller.getUserSites);
router.get("/:id", Controller.getUserById);

export default router;
