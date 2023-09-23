import express, { Express } from "express";
import cors from "cors";
import corsOptions from "middlewares/corsConfig";
import plantsRouter from "routes/plants";
import speciesRouter from "routes/species";
import genusRouter from "routes/genus";
import { PORT } from "shared/consts";

const app: Express = express();

app.use(cors(corsOptions));
app.use("/plants", plantsRouter);
app.use("/species", speciesRouter);
app.use("/genus", genusRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
