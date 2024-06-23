const express = require("express");
const signupRoute = require("./routes/signup");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const connectDB = require('./config/dbConfig');
require('dotenv').config();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/user", signupRoute);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
};

start();