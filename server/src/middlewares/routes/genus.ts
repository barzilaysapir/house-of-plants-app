import express from "express";
import { getAllGenuses, getGenusById, searchGenuses } from "controllers/genus";

const router = express.Router();

router.get("/search/:q", searchGenuses);
router.get("/:id", getGenusById);
router.get("/", getAllGenuses);

export default router;
