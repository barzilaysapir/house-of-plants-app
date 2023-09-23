import { CorsOptions } from "cors";

const whitelist: string[] = [
    "http://localhost:3000",
    "http://localhost:4000",
    "https://yourproductiondomain.com",
];

const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (origin && whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

export default corsOptions;
