const express = require("express");

var AuthSysRoute = express.Router();

AuthSysRoute.post("/getAuthSystem", (req, res, next) => {
  console.log("__dirname: ", __dirname + "/../authSystems");
  try {
    const { systemType } = req.body;
    console.log(
      "🚀 ~ file: getReqAuthSystem.js:9 ~ AuthSysRoute.get ~ systemType:",
      systemType
    );

    if (systemType !== "JWT") {
      return res.download(__dirname + "/../authSystems/jwt-auth.zip");
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid System Type",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      errorMessage: error.message,
    });
  }
});

module.exports = AuthSysRoute;
