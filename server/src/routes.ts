import express from "express";
import genusRouter from "./routes/genus";
import plantsRouter from "./routes/plants";
import speciesRouter from "./routes/species";

const router = express.Router();

router.get("/genus", genusRouter);
router.get("/plants", plantsRouter);
router.get("/species", speciesRouter);

export default router;
