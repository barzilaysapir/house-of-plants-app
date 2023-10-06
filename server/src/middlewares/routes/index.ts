import express from "express";
import speciesRouter from "./species";
import usersRouter from "./users";

const router = express.Router();

router.use("/users", usersRouter);
router.use("/species", speciesRouter);

export default router;
