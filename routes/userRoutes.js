const express = require("express");
const {
  registerUser,
  loginUser,
  currentUser,
} = require("../controllers/userController");
const upload = require("../middleware/uploadProfileImage");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

router.post("/register", upload.single("imageUrl"), registerUser);

router.post("/login", loginUser);

router.get("/current", validateToken, currentUser);

module.exports = router;
