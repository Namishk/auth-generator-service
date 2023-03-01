require("dotenv").config();
// require("./config/database").connect();
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require('cors')

// App object
const app = express();

// Middleware
app.use(express.json());
app.use(fileUpload());
app.use(cors()) //dev Build


// Import Routes
const AuthSysRoute = require("./routes/getReqAuthSystem");


// Routes
app.use("/api", AuthSysRoute);


module.exports = app;