import express, { Express } from "express";
import axios from "axios";
import cors from "cors";
import corsOptions from "./middlewares/corsConfig";
import plantsRouter from "./routes/plants";
import speciesRouter from "./routes/species";
import genusRouter from "./routes/genus";

const app: Express = express();
const PORT = 4000;
// const TREFLE_API = "https://trefle.io/api/v1";
// const TREFLE_TOKEN = "0rb0D_osH3J27ZVWN8CWNrpv1o-2zKP_aPfXtnq0mgY";

app.use(cors(corsOptions));
app.use("/plants", plantsRouter);
app.use("/species", speciesRouter);
app.use("/genus", genusRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
