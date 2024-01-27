require('dotenv').config();
const express = require('express');
const http = require("http");
const cors = require("cors");
var cookies = require("cookie-parser");
const webRoutes = require('./src/routes/index');
const db = require('./src/models/index');
const bodyParser = require('body-parser');

const sequelize = require("./src/databases/connectdb");

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || 'localhost';

// config cors
app.use(
    cors({
        credentials: true,
        allowedHeaders: "Content-Type,Authorization",
        origin: process.env.CLIENT_URL ?? "http://localhost:3000",
    })
);
app.use(cookies());


// Parse JSON bodies
app.use(bodyParser.json());

// Parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: false }));



// Configure routes
app.use('/api/v2', webRoutes);

// Connect to the database
sequelize
    .authenticate()
    .then(() => {
        console.log("DB connected");
    })
    .catch((err) => {
        console.log("Error" + err);
    });

server.listen(port, hostname, () => {
    console.log(`Example app listening on http://${hostname}:${port}`);
});
