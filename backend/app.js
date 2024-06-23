const express = require("express");
const signupRoute = require("./routes/signup");
const loginRoute = require("./routes/login")
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const connectDB = require('./config/dbConfig');
require('dotenv').config();
const createAdminAccount = require("./scripts/admin")

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/user", signupRoute);
app.use("/api/v1/auth", loginRoute);

createAdminAccount();

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();