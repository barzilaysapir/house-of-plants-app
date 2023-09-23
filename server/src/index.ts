import express, { Express } from "express";
import cors from "cors";
import corsOptions from "middlewares/corsConfig";
import { PORT } from "utils/consts";
import routes from "routes";

const app: Express = express();
app.use(cors(corsOptions));
app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
