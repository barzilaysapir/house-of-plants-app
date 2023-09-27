import express, { Application } from "express";
import cors from "cors";
import router from "middlewares/routes";
import { connectToDB } from "utils/db";

const app: Application = express();

app.use(cors());
app.use("/", router);

connectToDB((err) => {
    if (err) {
        console.log("Dailed to connect to DB");
        throw err;
    } else {
        app.listen(Bun.env.PORT, () => {
            console.log(
                `Server is running on http://localhost:${Bun.env.PORT}`
            );
        });
    }
});
