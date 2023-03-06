// const path = require("path");
// const multer = require("multer");

// var storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads");
//   },
//   filename: function (req, file, cb) {
//     let ext = path.extname(file.originalname);
//     cb(null, Date.now() + ext);
//   },
// });

<<<<<<< HEAD
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 2,
  },
});

module.exports = upload;

=======
// var upload = multer({
//   storage: storage,
//   fileFilter: function (req, file, callback) {
//     if (file.mimetype == "image/png" || file.mimetype == "image/jpg") {
//       callback(null, true);
//     } else {
//       console.log("Only png and jpg");
//       callback(null, false);
//     }
//   },
//   limits: {
//     fileSize: 1024 * 1024 * 2,
//   },
// });

// module.exports = upload;
>>>>>>> 07dfee0f34e2542b01df057d78ac279a5ed13380
