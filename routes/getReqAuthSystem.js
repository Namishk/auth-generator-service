const express = require("express");
const fs = require("fs");
const archiver = require("archiver");
const path = require("path");

var AuthSysRoute = express.Router();

AuthSysRoute.get("/getAuthSystem", (req, res, next) => {
  // res.send('Auth System');

  try {
    const { systemType } = req.body;

    if (systemType === "JWT") {
      // res.status(200).json({
      //     success: true,
      //     message: 'JWT System'
      // });

      const folderPath = path.join(__dirname, "../authSystems/jwt-auth/");
      console.log(folderPath);
      const output = fs.createWriteStream("JWT-Authentication.zip");
      const archive = archiver("zip", { zlib: { level: 9 } });

      res.set({
        "Content-Type": "application/zip",
        "Content-Disposition": "attachment; filename=myfolder.zip",
      });

      output.on("close", () => {
        res.download("JWT-Authentication.zip");
      });

      archive.on("warning", (err) => {
        if (err.code === "ENOENT") {
          console.warn(err);
        } else {
          throw err;
        }
      });

      archive.on("error", (err) => {
        throw err;
      });

      // Append the folder to the archive and finalize it
      archive.directory(folderPath, false);
      archive.pipe(output);
      archive.finalize();
    } else {
      res.status(400).json({
        success: false,
        message: "Invalid System Type",
      });
    }
  } catch (error) {}
});

module.exports = AuthSysRoute;
