const whitelist = [
    "http://localhost:3000",
    "http://localhost:4000",
    "https://yourproductiondomain.com",
];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
};

module.exports = corsOptions;
