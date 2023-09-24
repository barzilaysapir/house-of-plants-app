import express from "express";
import genusRouter from "./routes/genus";
import plantsRouter from "./routes/plants";
import speciesRouter from "./routes/species";

const router = express.Router();

router.use("/genus", genusRouter);
router.use("/plants", plantsRouter);
router.use("/species", speciesRouter);

export default router;
