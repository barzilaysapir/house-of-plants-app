"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const corsConfig_1 = __importDefault(require("middlewares/corsConfig"));
const plants_1 = __importDefault(require("routes/plants"));
const species_1 = __importDefault(require("routes/species"));
const genus_1 = __importDefault(require("routes/genus"));
const consts_1 = require("shared/consts");
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsConfig_1.default));
app.use("/plants", plants_1.default);
app.use("/species", species_1.default);
app.use("/genus", genus_1.default);
app.listen(consts_1.PORT, () => {
    console.log(`Server is running on http://localhost:${consts_1.PORT}`);
});
