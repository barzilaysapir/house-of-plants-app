import express from "express";
import { getAllGenuses, getGenusById, searchGenuses } from "controllers/genus";

const router = express.Router();

router.get("/genus", getAllGenuses);
router.get("/genus/:id", getGenusById);
router.get("/genus/search/:q", searchGenuses);

export default router;
