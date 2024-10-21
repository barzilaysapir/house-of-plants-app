import express from "express";
import speciesRouter from "./species";
import usersRouter from "./users";
import plantsRouter from "./plants";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/species", speciesRouter);
router.use("/plants", plantsRouter);

export default router;
