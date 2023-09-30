import express, { Application } from "express";
import cors from "cors";
import router from "middlewares/routes";
import { connectToDB } from "utils/db";
import "dotenv/config"; // configure reading from .env

const app: Application = express();

// Augment express-session with a custom SessionData object
// declare module "express-session" {
//     interface SessionData {
//         userId: string;
//     }
// }

app.use(cors());
app.use(express.json());
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
