const multer = require("multer");
const path = require("path");

// Multer config
fileFilter = (req, file, cb) => {
  let ext = path.extname(file.originalname).toLowerCase();  
  if (ext !== ".pdf" ) {
    cb(("Error: File type not supported! PDF only!"), false);
    return;
  }
  cb(null, true);
},

module.exports = multer({
  storage: multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
      cb(
        null,
        req.body.surname +
          "_" +
          req.body.firstName +
          path.extname(file.originalname)
      );
    },
  }),
  limits: { fieldSize: 1024 * 1024 * 10 }, // set max. file size = 10 MB
  fileFilter
});