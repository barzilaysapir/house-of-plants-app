"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const consts_1 = require("utils/consts");
const routes_1 = __importDefault(require("middlewares/routes"));
const app = (0, express_1.default)();
// app.use(cors(corsOptions));
app.use((0, cors_1.default)());
app.use("/", routes_1.default);
app.listen(consts_1.PORT, () => {
    console.log(`Server is running on http://localhost:${consts_1.PORT}`);
});
