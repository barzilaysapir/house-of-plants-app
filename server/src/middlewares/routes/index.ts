import express from "express";
import genusRouter from "./genus";
import plantsRouter from "./plants";
import speciesRouter from "./species";
import usersRouter from "./users";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/genus", genusRouter);
router.use("/plants", plantsRouter);
router.use("/species", speciesRouter);

export default router;
