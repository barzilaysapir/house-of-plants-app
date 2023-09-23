"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const corsConfig_1 = __importDefault(require("./middlewares/corsConfig"));
const plants_1 = __importDefault(require("./routes/plants"));
const species_1 = __importDefault(require("./routes/species"));
const genus_1 = __importDefault(require("./routes/genus"));
const app = (0, express_1.default)();
const PORT = 4000;
// const TREFLE_API = "https://trefle.io/api/v1";
// const TREFLE_TOKEN = "0rb0D_osH3J27ZVWN8CWNrpv1o-2zKP_aPfXtnq0mgY";
app.use((0, cors_1.default)(corsConfig_1.default));
app.use("/plants", plants_1.default);
app.use("/species", species_1.default);
app.use("/genus", genus_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
