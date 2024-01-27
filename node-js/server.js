require('dotenv').config();
const express = require('express')
const http = require("http");

// const configViewEngine = require('./src/config/viewEngine')
const webRoutes = require('./src/routes/index')
// const connectDB = require('./src/databases/connectdb')
const db = require('./src/models/index')


const sequelize = require("./src/databases/connectdb");



const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const hostname = process.env.HOST_NAME || 'localhost';

// // Configure template engine
// configViewEngine(app)

// Configure routes
app.use('/api/v1', webRoutes)

//configure body request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//connect db
// connectDB();

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
