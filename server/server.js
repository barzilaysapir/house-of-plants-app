const express = require("express");
const axios = require("axios");
const cors = require("cors");
const corsOptions = require("./middlewares/corsConfig");
const plantsRouter = require("./routes/plants");
const speciesRouter = require("./routes/species");
const genusRouter = require("./routes/genus");

const app = express();
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
