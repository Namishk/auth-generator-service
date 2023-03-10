const express = require("express");
const admZip = require("adm-zip");

var AuthSysRoute = express.Router();

AuthSysRoute.get("/getAuthSystem", (req, res, next) => {
  try {
    const { systemType } = req.body;

    if (systemType === "JWT") {
      const zip = new admZip();
      zip.addLocalFolder("../authSystems/jwt-auth");

      var zipContents = zip.toBuffer();
      const fileName = "jwt-auth.zip";
      const fileType = "application/zip";
      res.writeHead(200, {
        "Content-Disposition": "attachment; filename=" + fileName,
        "Content-Type": fileType,
      });

      return res.end(zipContents);
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
