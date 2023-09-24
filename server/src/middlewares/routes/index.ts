import express from "express";
import genusRouter from "./genus";
import plantsRouter from "./plants";
import speciesRouter from "./species";

const router = express.Router();

router.use("/genus", genusRouter);
router.use("/plants", plantsRouter);
router.use("/species", speciesRouter);

export default router;
