import express from "express";
import cors from "cors";
import router from "middlewares/routes";

const app = express();

app.use(cors());
app.use("/", router);

app.listen(Bun.env.PORT, () => {
    console.log(`Server is running on http://localhost:${Bun.env.PORT}`);
});
