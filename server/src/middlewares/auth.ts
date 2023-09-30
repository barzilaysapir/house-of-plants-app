import express from "express";
import { getDb } from "utils/db";

const app = express();
const usersCollection = getDb().collection("users");

app.use(async (req: any, res, next) => {
    const user = await usersCollection.findOne({
        $where: { id: req.session.userId },
    });
    req.user = user;
    next();
});
